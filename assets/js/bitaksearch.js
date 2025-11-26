// Sample database - you can expand this with your own data assets/bitaksaheb/bitak with meaning.txt
// ---------------------------------------------------
//  PARTICLE ANIMATION
// ---------------------------------------------------
for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDelay = Math.random() * 4 + 's';
    p.style.animationDuration = (Math.random() * 3 + 3) + 's';
    document.body.appendChild(p);
}

// ---------- constants & helpers ----------
const DEVANAGARI_DIGITS = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
const ARABIC_DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const digitMap = DEVANAGARI_DIGITS.reduce((m, d, i) => (m[d] = ARABIC_DIGITS[i], m), {});

// safe escape for regex (for non-digit parts)
function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function updateSpeech(text) { speechBubble.innerHTML = text; speechBubble.style.animation = "none"; setTimeout(() => speechBubble.style.animation = "fadeIn 0.5s", 10); }
// build a regex string that is digit-insensitive: each digit becomes (d|देvanagari)
function queryToDigitInsensitiveRegexString(q) {
    // We'll iterate characters: if char is arabic digit -> replace with [0०]
    // if char is devanagari digit -> replace with [०0]
    // otherwise escape it
    let out = '';
    for (let ch of q) {
        if (/[0-9]/.test(ch)) {
            const d = ch; // arabic
            const dev = DEVANAGARI_DIGITS[ARABIC_DIGITS.indexOf(d)];
            out += `(${escapeRegex(d)}|${escapeRegex(dev)})`;
        } else if (DEVANAGARI_DIGITS.includes(ch)) {
            const dev = ch;
            const ar = ARABIC_DIGITS[DEVANAGARI_DIGITS.indexOf(dev)];
            out += `(${escapeRegex(ar)}|${escapeRegex(dev)})`;
        } else {
            out += escapeRegex(ch);
        }
    }
    return out;
}

// normalize digits to Arabic for comparison (but we show original text)
function normalizeDigitsToArabic(str) {
    return str.replace(/[०-९]/g, d => digitMap[d] ?? d);
}

// ---------- load DB ----------
let database = "";
let isLoaded = false;

async function loadDatabase() {
    updateSpeech("श्री बीतक साहेब चौपाइयाँ लोड हो रही है… कृपया प्रतीक्षा करें। ⏳");
    try {
        const resp = await fetch("assets/bitaksaheb/bitak with meaning.txt");
        let txt = await resp.text();

        // convert literal "\n" sequences (backslash + n) to real newlines
        txt = txt.replace(/\\n/g, '\n');

        // optional: normalize any stray CRLF -> LF
        txt = txt.replace(/\r\n/g, '\n');

        database = txt;
        isLoaded = true;
        //console.log("Database loaded. Length:", database.length);
        updateSpeech("श्री बीतक साहेब चौपाइयाँ सफलतापूर्वक लोड गई है! <br> अब खोज शुरू करें। 🔍");
    } catch (err) {
      //  console.error("Load DB error:", err);
        updateSpeech("श्री बीतक साहेब चौपाइयाँ लोड नहीं हो सकी। ❌ कृपया जाँचें।");
    }
}
loadDatabase();

// ---------- split into chopai+meaning objects ----------
function parseBlocks(text) {
    // ensure real newlines
    text = (text || "").replace(/\\n/g, '\n');
    // split on double-newlines (empty line separator)
    const parts = text.split(/\n\n/);

    const blocks = [];
    // iterate in pairs (chopai, meaning)
    for (let i = 0; i < parts.length - 0; i += 2) {
        const chopai = (parts[i] || "").trim();
        // meaning maybe next element; if next missing, set empty
        const meaning = (parts[i + 1] || "").trim();

        // if both empty skip
        if (!chopai && !meaning) continue;

        // push chopai + meaning; if meaning missing, still push (keeps indexing)
        blocks.push({ chopai, meaning });
    }
    return blocks;
}

// ---------- search routine ----------
function getAllSnippets(text, query) {
    const matches = [];
    if (!text || !query) return matches;

    // normalize newlines and parse blocks
    const blocks = parseBlocks(text);

    // normalized query for includes check (convert devanagari digits to arabic + lowercase)
    const normalizedQuery = normalizeDigitsToArabic(query.toLowerCase());

    // iterate through each block: each block is chopai + meaning
    for (const block of blocks) {
        const chopai = block.chopai || "";
        const meaning = block.meaning || "";

        const normChopai = normalizeDigitsToArabic(chopai.toLowerCase());
        const normMeaning = normalizeDigitsToArabic(meaning.toLowerCase());

        if (normChopai.includes(normalizedQuery) || normMeaning.includes(normalizedQuery)) {
            matches.push(block);
        }
    }

    return matches;
}

// ---------- format & highlight ----------
function formatText(text) {
    if (!text) return "";
    // convert literal \n if present
    text = text.replace(/\\n/g, '\n');
    // double newline -> two breaks
    text = text.replace(/\n\n/g, '<br><br>');
    // single newline -> one break
    text = text.replace(/\n/g, '<br>');
    return text;
}

// highlight using digit-insensitive regex
function highlightHTML(html, rawQuery) {
    if (!rawQuery) return html;
    // Build regex string that treats digits equivalently
    const regexStr = queryToDigitInsensitiveRegexString(rawQuery);
    try {
        const re = new RegExp(regexStr, 'gi');
        // We must be careful not to break HTML tags. A simple approach: operate on text nodes only would be ideal,
        // but here we assume html contains no nested tags around the search term (only <br> etc). Use replace.
        return html.replace(re, match => `<span class="highlight">${match}</span>`);
    } catch (e) {
        console.warn("Highlight regex build failed, falling back to simple escape:", e);
        // fallback: simple escaped query highlight (won't match devanagari/arabic mismatch)
        const safe = escapeRegex(rawQuery);
        return html.replace(new RegExp(safe, 'gi'), `<span class="highlight">$&</span>`);
    }
}

// ---------- main performSearch ----------
function performSearch() {
    if (!isLoaded) {
        updateSpeech("डेटा अभी भी लोड हो रहा है… ⏳");
        return;
    }

    const query = searchInput.value.trim();
    if (!query) {
        updateSpeech("कृपया कोई शब्द टाइप करें।");
        return;
    }

    updateSpeech("खोज जारी है… 🔍");
    results.innerHTML = `<div class="loading-animation"><div class="spinner"></div></div>`;

    // small async tick so UI spinner shows
    setTimeout(() => {
        try {
            const blocks = getAllSnippets(database, query);
            console.log("Search for:", query, "=> found:", blocks.length);

            if (!blocks || blocks.length === 0) {
                updateSpeech("कोई परिणाम नहीं मिला 😔");
                results.innerHTML = `<p style="text-align:center">कोई परिणाम नहीं मिला।</p>`;
                return;
            }

            let html = ``;

            // build each result card
            blocks.forEach((block, idx) => {
                const chopaiHTML = formatText(block.chopai);
                const meaningHTML = formatText(block.meaning);

                // highlight both chopai and meaning using the original query string (digit-insensitive)
                const chopaiHighlighted = highlightHTML(chopaiHTML, query);
                const meaningHighlighted = highlightHTML(meaningHTML, query);

                html += `
                    <div class="result-card" style="animation-delay:${idx * 0.02}s">
                        <h3>प्राप्त परिणाम ${idx + 1}:</h3>
                        <div class="chopai">${chopaiHighlighted}</div>
                        <div class="meaning">${meaningHighlighted}</div>
                    </div>
                `;
            });

            results.innerHTML = html;
            updateSpeech(`बहुत बढ़िया! ${blocks.length} परिणाम मिल गए 🎉`);
        } catch (err) {
            console.error("Search error:", err);
            updateSpeech("खोज में त्रुटि हुई। कृपया कंसोल देखें।");
            results.innerHTML = `<p style="color:red">अरे! खोज करते समय कोई समस्या आ गई। ज़रा कंसोल में देख लीजिए।</p>`;
        }
    }, 60);
}

// ---------- attach listeners (if not already) ----------
searchBtn.addEventListener("click", performSearch); 
searchInput.addEventListener("keypress", e => { if (e.key === "Enter") performSearch(); }); 
searchInput.addEventListener("input", e => { 
    if (e.target.value.length > 0) { 
        updateSpeech("बहुत बढ़िया! अब ‘खोजें’ बटन दबाएँ। 👍"); }
     }
);
const clearSearch = document.getElementById("clearSearch");

// Toggle clear icon visibility
searchInput.addEventListener("input", () => {
    clearSearch.style.display = searchInput.value.length > 0 ? "block" : "none";
});

// Clear text when clicking the icon
clearSearch.addEventListener("click", () => {
    // Clear input
    searchInput.value = "";

    // Hide clear button
    clearSearch.style.display = "none";

    // Clear results UI
    results.innerHTML = "";

    // Reset speech bubble
    updateSpeech("क्या खोजना चाहेंगे? 😊");

    // Put cursor back in input
    searchInput.focus();
});
// ---------- minimal debug helper ----------
function debugStatus() {
    console.log({
        isLoaded,
        dbLength: database.length
    });
}