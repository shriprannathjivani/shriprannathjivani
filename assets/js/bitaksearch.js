/* ---------------------------------------------------
   SCROLL TO TOP BUTTON
--------------------------------------------------- */
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = () => {
    scrollBtn.style.display =
        document.documentElement.scrollTop > 200 ? "block" : "none";
};

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

let currentIndex = -1;
let allResults = [];

const counter = document.getElementById("resultCounter");

function updateCounter() {
    if (allResults.length === 0) {
        counter.innerText = "0 / 0";
    } else {
        counter.innerText = `${currentIndex + 1} / ${allResults.length}`;
    }
}

function activateResult(index) {
    allResults.forEach(el => el.classList.remove("active-result"));

    const el = allResults[index];
    if (!el) return;

    el.classList.add("active-result");
    el.scrollIntoView({ behavior: "smooth", block: "center" });

    updateCounter();
}

document.getElementById("nextResult").addEventListener("click", () => {
    if (allResults.length === 0) return;
    currentIndex = (currentIndex + 1) % allResults.length;
    activateResult(currentIndex);
});

document.getElementById("prevResult").addEventListener("click", () => {
    if (allResults.length === 0) return;
    currentIndex = (currentIndex - 1 + allResults.length) % allResults.length;
    activateResult(currentIndex);
});



/* ---------------------------------------------------
   PARTICLE ANIMATION
--------------------------------------------------- */
for (let i = 0; i < 20; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    p.style.left = Math.random() * 100 + "%";
    p.style.animationDelay = Math.random() * 4 + "s";
    p.style.animationDuration = Math.random() * 3 + 3 + "s";
    document.body.appendChild(p);
}

/* ---------------------------------------------------
   CONSTANTS & HELPERS
--------------------------------------------------- */
const DEVANAGARI_DIGITS = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
const ARABIC_DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const digitMap = {};
DEVANAGARI_DIGITS.forEach((d, i) => digitMap[d] = ARABIC_DIGITS[i]);

function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function normalizeDigitsToArabic(str) {
    return str.replace(/[०-९]/g, d => digitMap[d] || d);
}

function queryToDigitInsensitiveRegexString(q) {
    let out = "";
    for (let ch of q) {
        if (/[0-9]/.test(ch)) {
            let dev = DEVANAGARI_DIGITS[ARABIC_DIGITS.indexOf(ch)];
            out += `(${ch}|${dev})`;
        } else if (DEVANAGARI_DIGITS.includes(ch)) {
            let ar = ARABIC_DIGITS[DEVANAGARI_DIGITS.indexOf(ch)];
            out += `(${ch}|${ar})`;
        } else {
            out += escapeRegex(ch);
        }
    }
    return out;
}

/* ---------------------------------------------------
   SPEECH BUBBLE UI
--------------------------------------------------- */
function updateSpeech(text) {
    speechBubble.innerHTML = text;
    speechBubble.style.animation = "none";
    setTimeout(() => (speechBubble.style.animation = "fadeIn 0.5s"), 10);
}

/* ---------------------------------------------------
   LOAD DATABASE
--------------------------------------------------- */
let database = "";
let isLoaded = false;

async function loadDatabase() {
    updateSpeech("श्री बीतक साहेब चौपाइयाँ लोड हो रही है… कृपया प्रतीक्षा करें। ⏳");

    try {
        const resp = await fetch("assets/bitaksaheb/bitak with meaning.txt");
        let txt = await resp.text();

        txt = txt.replace(/\\n/g, "\n").replace(/\r\n/g, "\n");

        database = txt;
        isLoaded = true;

        updateSpeech("श्री बीतक साहेब चौपाइयाँ सफलतापूर्वक लोड गई है!<br> अब खोज शुरू करें। 🔍");
    } catch {
        updateSpeech("श्री बीतक साहेब चौपाइयाँ लोड नहीं हो सकी। ❌ कृपया जाँचें।");
    }
}
loadDatabase();

/* ---------------------------------------------------
   CLEAN BLOCK PARSER (Chopai + Meaning)
--------------------------------------------------- */
function parseBlocks(text) {
    const raw = text.split(/\n\n+/);
    const blocks = [];

    const meaningMarkers = /(भावार्थ|अर्थ|व्याख्या|meaning|explanation|व्यौरा)/i;

    for (let i = 0; i < raw.length; i++) {
        const block = raw[i].trim();
        if (!block) continue;

        const next = raw[i + 1]?.trim() || "";

        if (meaningMarkers.test(block)) {
            blocks.push({
                chopai: raw[i - 1]?.trim() || "",
                meaning: block
            });
        }
        else if (meaningMarkers.test(next)) {
            blocks.push({
                chopai: block,
                meaning: next
            });
            i++;
        }
        else {
            blocks.push({
                chopai: block,
                meaning: ""
            });
        }
    }

    return blocks;
}

/* ---------------------------------------------------
   DIGIT-INSENSITIVE SEARCH ENGINE
--------------------------------------------------- */
function searchBlocks(database, query) {
    const normalizedQuery = normalizeDigitsToArabic(query.toLowerCase());

    const blocks = parseBlocks(database);
    const results = [];

    blocks.forEach(b => {
        const nc = normalizeDigitsToArabic(b.chopai.toLowerCase());
        const nm = normalizeDigitsToArabic(b.meaning.toLowerCase());

        if (nc.includes(normalizedQuery) || nm.includes(normalizedQuery)) {
            results.push(b);
        }
    });

    return results;
}

/* ---------------------------------------------------
   HIGHLIGHT
--------------------------------------------------- */
function highlightHTML(text, rawQuery) {
    if (!rawQuery) return text;

    const regexStr = queryToDigitInsensitiveRegexString(rawQuery);
    const re = new RegExp(regexStr, "gi");

    return text.replace(re, m => `<span class="highlight">${m}</span>`);
}

/* ---------------------------------------------------
   MAIN SEARCH FUNCTION
--------------------------------------------------- */
function performSearch() {
    const query = searchInput.value.trim();
    if (!query) {
        updateSpeech("कृपया कोई शब्द टाइप करें।");
        return;
    }

    updateSpeech("खोज जारी है… 🔍");
    results.innerHTML = `<div class="loading-animation"><div class="spinner"></div></div>`;

    setTimeout(() => {
        const extracted = searchBlocks(database, query);

        if (extracted.length === 0) {
            results.innerHTML = `<p style="text-align:center">कोई परिणाम नहीं मिला।</p>`;
            updateSpeech("कोई परिणाम नहीं मिला 😔");
            return;
        }

        let html = "";

        extracted.forEach((item, i) => {
            const chopai = highlightHTML(item.chopai.replace(/\n/g, "<br>"), query);
            const meaning = highlightHTML(item.meaning.replace(/\n/g, "<br>"), query);

            html += `
                <div class="result-card" style="animation-delay:${i * 0.05}s">
                    <h3>चोपाई:</h3>
                    <p class="chopai">${chopai}</p>

                    ${item.meaning ? `
                        <h3>भावार्थ:</h3>
                        <p class="meaning">${meaning}</p>
                    ` : ""}
                </div>
            `;
        });

        results.innerHTML = html;

        // GET ALL RESULT CARDS
        allResults = Array.from(document.querySelectorAll(".result-card"));
        currentIndex = 0;

        if (allResults.length > 0) {
            activateResult(0);
            document.getElementById("resultNavigator").style.display = "flex"; // SHOW WIDGET
        } else {
            document.getElementById("resultNavigator").style.display = "none"; // HIDE WIDGET
        }
        updateSpeech(`बहुत बढ़िया! ${extracted.length} परिणाम मिले 🎉`);
        document.getElementById("resultNavigator").style.display = "flex";
    }, 250);
}

/* ---------------------------------------------------
   INPUT + CLEAR BUTTON
--------------------------------------------------- */
searchBtn.addEventListener("click", performSearch);

searchInput.addEventListener("keypress", e => {
    if (e.key === "Enter") performSearch();
});

const clearSearch = document.getElementById("clearSearch");

searchInput.addEventListener("input", () => {
    clearSearch.style.display = searchInput.value ? "block" : "none";
     if (searchInput.value === "") {
        results.innerHTML = "";
        document.getElementById("resultNavigator").style.display = "none";
        updateSpeech("क्या खोजना चाहेंगे? 😊");
    }
});

clearSearch.addEventListener("click", () => {
    searchInput.value = "";
    clearSearch.style.display = "none";

    // Clear results completely
    results.innerHTML = "";

    // Reset navigation
    allResults = [];
    currentIndex = -1;

    // Hide widget
    document.getElementById("resultNavigator").style.display = "none";

    updateSpeech("क्या खोजना चाहेंगे? 😊");
    searchInput.focus();
});
