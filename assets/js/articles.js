const container = document.getElementById('article-grid');
const searchInput = document.getElementById('searchInput');
const articleList = Object.values(articles); // Convert object to array

function renderArticles(data) {
  container.innerHTML = "";

  data.forEach(article => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-lg-6 mb-4";

    col.innerHTML = `
      <div class="card article-card h-100" style="transition: transform 0.3s ease;">
        <a href="article-details.html?id=${article.id}" class="text-decoration-none text-dark">
          <div class="card-img-box">
            <img src="${article.images?.[0] || 'https://via.placeholder.com/600x300'}" class="card-img-top" alt="${article.title}">
          </div>
          <div class="card-body">
            ${article.tag ? `<span class="card-tag">${article.tag}</span>` : ''}
            <h5 class="card-title">${article.title}</h5>
            <p class="card-text mb-0">${article.tikaName || ''}</p>
            <p class="card-text">${article.writer || ''}</p>
            <p class="card-date mt-3">${article.date || ''}</p>
          </div>
        </a>
      </div>
    `;

    // Hover animation
    col.querySelector(".article-card").addEventListener("mouseover", () => {
      col.querySelector(".article-card").style.transform = "scale(1.02)";
    });
    col.querySelector(".article-card").addEventListener("mouseout", () => {
      col.querySelector(".article-card").style.transform = "scale(1)";
    });

    container.appendChild(col);
  });
}

// Initial render
renderArticles(articleList);

// Live Search
searchInput.addEventListener('input', () => {
  const text = searchInput.value.toLowerCase();
  const filtered = articleList.filter(a =>
    a.title.toLowerCase().includes(text) ||
    a.summary?.toLowerCase().includes(text) ||
    a.description?.toLowerCase().includes(text)
  );
  renderArticles(filtered);
});



