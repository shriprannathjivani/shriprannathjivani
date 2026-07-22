let fuseInstance = null;
let rawChaupaisData = [];

// DOM Element Selectors
const searchInput = document.getElementById('searchInput');
const exactMatchCheckbox = document.getElementById('exactMatchCheckbox');
const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');
const resultsList = document.getElementById('resultsList');
const resultsCount = document.getElementById('resultsCount');

// Initialize Fuse.js Engine
function initializeFuse(data) {
  fuseInstance = new Fuse(data, {
    keys: ['title'],
    threshold: 0.35,
    ignoreLocation: true,
    minMatchCharLength: 2
  });
}

// Fetch JSON Dataset
async function loadChaupais() {
  try {
    const response = await fetch('assets/bitaksaheb/allinonechaupais.json');
    if (!response.ok) throw new Error('JSON डेटा लोड करने में समस्या हुई');
    
    rawChaupaisData = await response.json();
    initializeFuse(rawChaupaisData);

  } catch (error) {
    resultsList.innerHTML = `
      <div class="alert alert-danger text-center small rounded-3 p-3">
        <i class="bi bi-exclamation-triangle-fill me-1"></i> त्रुटि: ${escapeHTML(error.message)}
      </div>`;
  }
}

// Toggle Clear Icon Visibility based on input text
searchInput.addEventListener('input', () => {
  if (searchInput.value.trim().length > 0) {
    clearBtn.classList.remove('d-none');
  } else {
    clearBtn.classList.add('d-none');
  }
});

// Event Bindings
searchBtn.addEventListener('click', performSearch);
clearBtn.addEventListener('click', clearSearch);

// Search automatically on Enter
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') performSearch();
});

// Clear input & reset view
function clearSearch() {
  searchInput.value = '';
  clearBtn.classList.add('d-none');
  exactMatchCheckbox.checked = false;
  resultsList.innerHTML = '';
  resultsCount.textContent = '';
  searchInput.focus();
}

// Perform Search Execution
function performSearch() {
  const query = searchInput.value.trim();
  if (!query) {
    clearSearch();
    return;
  }

  const isExact = exactMatchCheckbox.checked;

  if (isExact) {
    // 1. Exact Word/Phrase Match Search
    const exactMatches = rawChaupaisData.filter(item => 
      item.title && item.title.toLowerCase().includes(query.toLowerCase())
    );
    renderResults(exactMatches, query, true);
  } else {
    // 2. Fuzzy Search using Fuse.js
    if (!fuseInstance) return;
    const fuseMatches = fuseInstance.search(query).map(res => res.item);
    renderResults(fuseMatches, query, false);
  }
}

// Render Search Results DOM List
function renderResults(items, query, isExact) {
  resultsList.innerHTML = '';

  if (items.length === 0) {
    resultsCount.textContent = '';
    resultsList.innerHTML = `
      <div class="text-center p-4 bg-white rounded-3 border text-muted small">
        <i class="bi bi-search fs-3 d-block mb-1 text-secondary"></i>
        ${isExact ? 'कोई सटीक परिणाम नहीं मिला' : 'कोई परिणाम नहीं मिला'}
      </div>`;
    return;
  }

  resultsCount.textContent = `कुल ${isExact ? 'सटीक परिणाम' : 'परिणाम'}: ${items.length}`;
  const fragment = document.createDocumentFragment();

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'chaupai-card';

    // Format title into 2-lines with ending number joined inline on the 2nd line
    const formattedTitle = formatChaupaiText(item.title);
    const highlightedTitle = highlightQuery(formattedTitle, query);

    card.innerHTML = `
      <div class="chaupai-text">${highlightedTitle}</div>
      <div class="d-flex flex-wrap align-items-center gap-2">
        <span class="badge bg-primary-subtle text-primary border border-primary-subtle badge-compact">
          <i class="bi bi-journal-bookmark me-1"></i>श्री तारतम वाणी: ${escapeHTML(item.bookName || 'N/A')}
        </span>
        <span class="badge bg-info-subtle text-info-emphasis border border-info-subtle badge-compact">
          <i class="bi bi-bookmark-dash me-1"></i>प्रकरण: ${escapeHTML(item.prakaranName || 'N/A')}
        </span>
      </div>
    `;

    fragment.appendChild(card);
  });

  resultsList.appendChild(fragment);
}

/**
 * Strict two-line Chaupai formatting:
 * Line 1: "एक खुदा हक महंमद, हर जातें पूजें धर नाऊँ।"
 * Line 2: "सो दुनियाँ में या बिना, कोई नहीं कित काऊँ।। २०।।"
 */
function formatChaupaiText(text) {
  if (!text) return '';

  let cleanText = text.replace(/[\r\n]+/g, ' ').replace(/\s+/g, ' ').trim();
  cleanText = cleanText.replace(/(?:।|\s)+([०-९0-9]+)(?:।|\s)*$/g, '।। $1।।');

  return cleanText.replace(/।(?!\s*।)(?![\s]*[०-९0-9]+)/g, '।\n');
}

/**
 * Smart Devanagari Highlighting:
 * Automatically matches base stems (e.g., searching सतगुरु will highlight both सतगुरु and सतगुर).
 */
function highlightQuery(text, query) {
  const escapedText = escapeHTML(text);
  if (!query) return escapedText;

  const words = query.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return escapedText;

  // Build flexible search patterns by stripping trailing Devanagari vowel matras (ُ , ू, ो, ौ, etc.)
  const patterns = words.map(word => {
    // Stem trailing matras (e.g., "सतगुरु" -> "सतगुर")
    const stem = word.replace(/[\u093e-\u094c\u0962\u0963]+$/g, '');
    const escapedStem = escapeRegExp(stem);
    
    // Match the stem plus optional trailing vowel matras
    return `${escapedStem}[\u093e-\u094c\u0962\u0963]?`;
  });

  const combinedPattern = new RegExp(`(${patterns.join('|')})`, 'gi');
  return escapedText.replace(combinedPattern, '<mark>$1</mark>');
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

document.addEventListener('DOMContentLoaded', loadChaupais);