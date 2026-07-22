let fuseInstance = null;
let rawChaupaisData = [];

// DOM Element Selectors
const searchInput = document.getElementById('searchInput');
const exactMatchCheckbox = document.getElementById('exactMatchCheckbox');
const bookSelect = document.getElementById('bookSelect');
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

// Dynamically populate book options in exact JSON order
function populateBookDropdown(data) {
  // Extract unique book names while preserving JSON insertion order
  const books = Array.from(new Set(data.map(item => item.bookName).filter(Boolean)));

  bookSelect.innerHTML = '<option value="">सभी पुस्तकें (All)</option>';
  books.forEach(book => {
    const option = document.createElement('option');
    option.value = book;
    option.textContent = book;
    bookSelect.appendChild(option);
  });
}

// Fetch JSON Dataset
async function loadChaupais() {
  try {
    const response = await fetch('assets/bitaksaheb/allinonechaupais.json');
    if (!response.ok) throw new Error('JSON डेटा लोड करने में समस्या हुई');
    
    rawChaupaisData = await response.json();
    populateBookDropdown(rawChaupaisData);
    initializeFuse(rawChaupaisData);

  } catch (error) {
    resultsList.innerHTML = `
      <div class="alert alert-danger text-center small rounded-3 p-3">
        <i class="bi bi-exclamation-triangle-fill me-1"></i> त्रुटि: ${escapeHTML(error.message)}
      </div>`;
  }
}

// Toggle Clear Icon Visibility
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
bookSelect.addEventListener('change', () => {
  if (searchInput.value.trim()) performSearch();
});
exactMatchCheckbox.addEventListener('change', () => {
  if (searchInput.value.trim()) performSearch();
});

// Search automatically on Enter
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') performSearch();
});

// Clear input & reset view
function clearSearch() {
  searchInput.value = '';
  clearBtn.classList.add('d-none');
  exactMatchCheckbox.checked = false;
  bookSelect.value = '';
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

  const selectedBook = bookSelect.value;
  const isExact = exactMatchCheckbox.checked;

  // Filter dataset by book name if selected
  const datasetToSearch = selectedBook
    ? rawChaupaisData.filter(item => item.bookName === selectedBook)
    : rawChaupaisData;

  if (isExact) {
    // 1. Exact Match Search
    const exactMatches = datasetToSearch.filter(item => 
      item.title && item.title.toLowerCase().includes(query.toLowerCase())
    );
    renderResults(exactMatches, query, true);
  } else {
    // 2. Fuzzy Search using Fuse.js
    const tempFuse = new Fuse(datasetToSearch, {
      keys: ['title'],
      threshold: 0.35,
      ignoreLocation: true,
      minMatchCharLength: 2
    });

    const fuseMatches = tempFuse.search(query).map(res => res.item);
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

  const selectedBook = bookSelect.value;
  const filterLabel = selectedBook ? ` (${selectedBook})` : '';
  resultsCount.textContent = `कुल ${isExact ? 'सटीक परिणाम' : 'परिणाम'}${filterLabel}: ${items.length}`;
  
  const fragment = document.createDocumentFragment();

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'chaupai-card';

    const formattedTitle = formatChaupaiText(item.title);
    const highlightedTitle = highlightQuery(formattedTitle, query);

    card.innerHTML = `
      <div class="chaupai-text">${highlightedTitle}</div>
      <div class="d-flex flex-wrap align-items-center gap-2">
        <span class="badge bg-primary-subtle text-primary border border-primary-subtle badge-compact">
          <i class="bi bi-journal-bookmark me-1"></i>पुस्तक: ${escapeHTML(item.bookName || 'N/A')}
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

  const patterns = words.map(word => {
    const stem = word.replace(/[\u093e-\u094c\u0962\u0963]+$/g, '');
    const escapedStem = escapeRegExp(stem);
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