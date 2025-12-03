const chapterTitles = [
    "भविष्य पुराण में, राजा कहे जुग चार",
    "इस प्रकरण में यह दर्शाया गया है कि श्री देवचन्द्र जी ने किस प्रकार से कष्ट सह-सहकर प्रियतम परब्रह्म की खोज की",
    "अब कहो कच्छ देस की, पहुंचे आप आये जित",
    "या समै हरिदास जी, एक दिन नीको ठहराय कर",
    "अब इहां से आये, बीच हलार देस",
    "अब कहों श्री देवचन्द्रजी की, जो बात मूल बुजरक",
    "साल नव सौ नब्बे मास नव, हुए रसूल को जब",
    "अब तुम सुनियो मोमिनों, देखो अपने कदम",
    "अब कहूं मोमिन की, जो फिदा हुए ऊपर हक",
    "पहिले कहों श्री देवचन्द्र जी, कबीले के नाम",
    "पहिले दीन इस्लाम में, गांग जी भाई धरे कदम",
    "सिपारे बारमें मिने, पाने चौबीस में",
    "श्री देवचन्द्रजी के अमल में, साथ को सुख हुआ अंग",
    "तेरह वर्ष माया मिने, था ऊपर लौकिक बोझ",
    "सम्वत सत्रह सौ तिलोत्तरे, हुकम हुआ श्री राज",
    "आय के मुलाकात करी, लगे श्री देवचन्द्रजी के कदम",
    "सम्बत सत्रह सौ बारोत्तरे, आसो महिने में",
    "अब फेर कहों हब्से की, जाको प्रबोधपुरी नाम",
    "तीन सृष्टि कही वेद ने, तीनों कही फिरकान",
    "फेर कहों श्री जीय की, जो बीतक बीच इसलाम",
    "फेर कहे सुकन जयराम को, दीप में श्रीजीयें जब",
    "फेर कहों दीप बन्दर की, जो लड़ाई दज्जाल बीतक",
    "अब कहों बीतक ठट्ठे की, याद करो मोमिन",
    "चिन्तामनि ढूँढ़त फिरे, कहां है उन साध का ठौर",
    "ए ठट्ठे की बीतक, लालदास की मुलाकात",
    "आए पहुँचे मसकत में, उतर नाव से",
    "अबासी बन्दर में, भैरों रहे सिरदार",
    "अबासी बन्दर से, आये कोग बन्दर",
    "श्री जी साहिब जी चले ठट्ठे से, नलिये आये पहुंचे",
    "देख नूर चरचा रोसनी, भई बिहारी जी को दिल सक",
    "श्री जी साहिब जी खुस्की चले, रण आन उतरे",
    "हजरतें हज इत करी, लेनें को मक्का",
    "श्री जी संग श्री बाई जी, और भट्ट गोवरधन",
    "इहाँ लगे कतेब की, चरचा में न चित",
    "इन समय सूरत से, आया लक्ष्मीदास",
    "फेर दस नाम संन्यास जो, बोले इस्ट प्रमाण",
    "षट दर्सन बोले तबे, प्राचीन हम मत",
    "फेर श्री राज आए दिल्ली, आए मिले सब साथ",
    "लाल दरवाजे की हवेली में, श्री राजें किया हुकुम",
    "रोहिल्ला खान की सराय में, बैठ किया विचार",
    "रामचन्द्र वकील के, फिरे कोईक दिन",
    "यों करते संझा समे, उठ आये अपने घर",
    "साथ सबे मिल बैठ के, लगे करने परियान",
    "मुलाकात सुलतान की, सुनी श्री राज ने जब",
    "ऐसी साहेदियां कई, हैं बीच अल्लाह कलाम",
    "अब तुम सुनियो मोमिनों, कहों जो बीतक तुम",
    "अब कहो मैं मजल की, जो हुई लड़ाई सरियत",
    "ऐ समाचार सुनियो, हम सूरत और सिद्ध पुर",
    "कामा पहाड़ी से होए, आए बीच आमेर",
    "फेर उहां से आये उदयपुर, उतरे हवेली में",
    "अब कहों मन्दसोर की, आये उदयपुर से चल",
    "इहां से आए सीतामऊ, तहां से नोलाई",
    "राणा के मुलक से, आए रामपुरे के ठौर",
    "अब तुम सुनियो साथ जी, सुकराना करो याद",
    "उहां से आए बुढ़ानपुर, फेर पहुंचाया पैगाम",
    "सिपारे दसमें मिनें, पाने सत्ताईस मिनें बयान",
    "बुढ़ानपुर से आकोट, तहां रहे महिने चार",
    "ए बात हरिसिंह सुनी, करने आया दीदार",
    "गढ़े की मजल में, आया याद रामनगर",
    "पहिले सूरत सिंह सुनी, बीच राम नगर",
    "अब कहूं बीतक परना की, जब बैठे इत आए",
    "अव्वल हक के दिल में, खेल दिखाऊं रूहन",
    "सुन्दर सेज सरूप की, अति प्यारी भरी नूर",
    "अब कहों दूसरे पहर की, सेवा साथ की जे",
    "अब कहूं आरोगन की, उठत समें झीलन",
    "अब कहूं तीसरे पहर की, बीतक जो सैंयन",
    "अब कहूं पोहोर चौथे की, बीतक जो सैयन",
    "अब कहूं पहर पांचमा, आया जब बखत",
    "अब कहों पहर छठे की, जित चरचा होत है हक",
    "अब रात पहर दो गई, पोहोर चार दिन दो रात",
    "अब कहों पोहोर आठमा, श्री राज पौढ़े पलंग पर",
    "दिन आठों पहर की, कही बिरत जो ए",
    "गरमी के दिनों में, सब सेवा खुसबोए"
];

let currentSearchQuery = "";
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
    let total = chapterBlocks.length > 0 ? chapterBlocks.length : allResults.length;

    if (total === 0) {
        counter.innerText = "0 / 0";
    } else {
        counter.innerText = `${currentIndex + 1} / ${total}`;
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

        updateSpeech("श्री बीतक साहेब चौपाइयाँ सफलतापूर्वक लोड हो गई है!<br> अब खोज शुरू करें। 🔍");
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

    // Add a lookahead to prevent matching inside Devanagari combining marks
    // \u0900-\u097F = Devanagari block
    // \u093A-\u094F = vowel signs (matras)
    // \u0951-\u0954 = Vedic marks
    const safeRegexStr = `(${regexStr})(?![\\u093A-\\u094F\\u0951-\\u0954])`;

    const re = new RegExp(safeRegexStr, "giu");

    return text.replace(re, m => `<span class="highlight">${m}</span>`);
}

/* ---------------------------------------------------
   MAIN SEARCH FUNCTION
--------------------------------------------------- */
function performSearch() {
    chapterBlocks = [];
    chapterChunkIndex = 0;
    document.querySelectorAll(".chapter-item")
        .forEach(item => item.classList.remove("active-chapter"));
    const query = searchInput.value.trim();
    if (!query) {
        updateSpeech("कृपया कोई शब्द टाइप करें।");
        return;
    }

    updateSpeech("खोज जारी है… 🔍");
    results.innerHTML = `<div class="loading-animation"><div class="spinner"></div></div>`;

    setTimeout(() => {
        currentSearchQuery = query;
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

        // hide button again
        clearChapterBtn.style.display = "none";

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

    // 🔄 Clear active chapter when typing
    document.querySelectorAll(".chapter-item")
        .forEach(item => item.classList.remove("active-chapter"));

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

function renderChapterList() {
    const container = document.getElementById("chapterList");
    container.innerHTML = `<h2 class="chapter-title">📜 सेलेक्ट बीतक चैप्टर </h2>`;

    chapterTitles.forEach((title, index) => {
        const div = document.createElement("div");
        div.className = "chapter-item";
        div.id = "chapter_" + index;

        div.innerText = `${index + 1}. ${title}`;
        div.addEventListener("click", () => openChapter(index));

        container.appendChild(div);
    });
}

renderChapterList();

function renderChapterListMobile() {
    const container = document.getElementById("chapterListMobile");
    container.innerHTML = `
    <br>
        <h2 class="chapter-title">📜 सेलेक्ट बीतक चैप्टर </h2>
        <select id="chapterDropdown">
            <option value="">सेलेक्ट बीतक चैप्टर</option>
            ${chapterTitles.map((title, index) =>
        `<option value="${index}">${index + 1}. ${title}</option>`
    ).join("")}
        </select>
    `;

    document.getElementById("chapterDropdown").addEventListener("change", (e) => {
        if (e.target.value !== "") {
            openChapter(e.target.value);
        }
    });
}

renderChapterListMobile();


function openChapter(index) {

    if (!isLoaded) {
        updateSpeech("डेटा लोड हो रहा है… ⏳");
        return;
    }

    // ---- HIGHLIGHT ACTIVE CHAPTER ----
    document.querySelectorAll(".chapter-item").forEach(item => {
        item.classList.remove("active-chapter");
    });
    const active = document.getElementById("chapter_" + index);
    if (active) active.classList.add("active-chapter");

    // SHOW CLEAR BUTTON
    clearChapterBtn.style.display = "block";

    const title = chapterTitles[index];
    const nextTitle = chapterTitles[index + 1];

    const start = database.indexOf(title);
    if (start === -1) {
        updateSpeech("यह अध्याय नहीं मिला।");
        return;
    }

    let end = database.length;
    if (nextTitle) {
        const nextIndex = database.indexOf(nextTitle, start + title.length);
        if (nextIndex !== -1) end = nextIndex;
    }

    const chapterText = database.substring(start, end);

    displayChapter(chapterText);

    updateSpeech(`"${title}" अध्याय खुल गया है 📖`);

    // ----------------------------------------------------
    // ⭐ REFRESH SEARCH HIGHLIGHTS + COUNTER ⭐
    // ----------------------------------------------------
    if (currentSearchQuery && currentSearchQuery.trim() !== "") {

        // Re-highlight inside currently opened chapter
        allResults.forEach(card => {
            const chopaiEl = card.querySelector(".chopai");
            const meaningEl = card.querySelector(".meaning");

            if (chopaiEl)
                chopaiEl.innerHTML = highlightHTML(chopaiEl.innerText, currentSearchQuery);

            if (meaningEl)
                meaningEl.innerHTML = highlightHTML(meaningEl.innerText, currentSearchQuery);
        });

        // Refresh counter (your own function)
        updateCounter();
    }
}



let chapterBlocks = [];
let chapterChunkIndex = 0;
const CHUNK_SIZE = 30; // Number of blocks per chunk

function loadNextChunk() {
    if (chapterChunkIndex >= chapterBlocks.length) return;

    const html = chapterBlocks
        .slice(chapterChunkIndex, chapterChunkIndex + CHUNK_SIZE)
        .map((item, i) => `
            <div class="result-card" style="animation-delay:${i * 0.05}s">
                <h3>चोपाई:</h3>
                <p class="chopai">${item.chopai.replace(/\n/g, "<br>")}</p>
                ${item.meaning ? `<h3>भावार्थ:</h3><p class="meaning">${item.meaning.replace(/\n/g, "<br>")}</p>` : ""}
            </div>
        `)
        .join("");

    results.insertAdjacentHTML("beforeend", html);

    // FIXED: only refresh list, no scrolling up!
    allResults = Array.from(document.querySelectorAll(".result-card"));

    chapterChunkIndex += CHUNK_SIZE;
}


window.addEventListener("scroll", () => {
    if (chapterBlocks.length === 0) return; // no chapter open
    if (chapterChunkIndex >= chapterBlocks.length) return; // fully loaded

    const rect = results.getBoundingClientRect();

    // When bottom of results section is near viewport bottom
    if (rect.bottom - window.innerHeight < 200) {
        loadNextChunk();
    }
});

function displayChapter(text) {

    // Parse chapter into blocks
    chapterBlocks = parseBlocks(text);
    allResults = [];
    chapterChunkIndex = 0;

    // Clear old results
    results.innerHTML = "";

    // Load first chunk only
    loadNextChunk();

    // Hide search effects
    searchInput.value = "";
    clearSearch.style.display = "none";
    currentIndex = -1;

    // Show navigator only when chunks are loaded
    if (allResults.length > 0) {
        activateResult(0);
        document.getElementById("resultNavigator").style.display = "flex";
    } else {
        document.getElementById("resultNavigator").style.display = "none";
    }
}

const clearChapterBtn = document.getElementById("clearChapterBtn");

function clearChapterSelection() {
    // remove highlight
    document.querySelectorAll(".chapter-item")
        .forEach(item => item.classList.remove("active-chapter"));

    // reset chapter blocks
    chapterBlocks = [];
    chapterChunkIndex = 0;

    // reset results
    results.innerHTML = "";
    allResults = [];
    currentIndex = -1;

    // hide navigation
    document.getElementById("resultNavigator").style.display = "none";

    // hide button again
    clearChapterBtn.style.display = "none";

    // reset dropdown to default ("Select Chapter")
    const dropdown = document.getElementById("chapterDropdown");
    if (dropdown) dropdown.value = "";

    window.scrollTo({ top: 0, behavior: "smooth" });

    // reset speech
    updateSpeech("कृपया अध्याय चुनें या खोज करें। 😊");
}

clearChapterBtn.addEventListener("click", clearChapterSelection);
