const params = new URLSearchParams(window.location.search);
const articleId = params.get("id");

const article = articles.find(a => a.id == articleId);
if (!article || !Array.isArray(article.images)) {
    document.body.innerHTML = `<div class="container py-5 text-center"><h2>लेख नहीं मिला</h2></div>`;
    throw new Error("Invalid article or missing images");
}

// Load views/likes
const viewsKey = `views_${articleId}`;
const likesKey = `likes_${articleId}`;
const likedKey = `liked_${articleId}`;

let views = parseInt(localStorage.getItem(viewsKey) || 0);
views++;
localStorage.setItem(viewsKey, views);

let likes = parseInt(localStorage.getItem(likesKey)) || 0;
let liked = localStorage.getItem(likedKey) === "true";

// Populate content
document.getElementById("heroImage").innerHTML = `<img src="${article.images[0]}" class="article-image">`;
document.getElementById("articleTitle").textContent = article.title;
document.getElementById("articleSummary").textContent = article.summary;
document.getElementById("metaInfo").innerHTML = `
  <span class="card-tag articleSummaryTag">${article.tag}</span>  <br>
  <strong><i data-feather="pen-tool"></i> ${article.tikaName}</strong> | 
  <i data-feather="edit-3"></i> ${article.writer} | 
  <i data-feather="calendar"></i> <em>${article.date}</em> | 
  <span><i data-feather="eye"></i> ${views} Views</span>
`;

document.getElementById("articleContent").innerHTML = `
  ${article.content.split("\n").map(p => `<p>${p}</p>`).join('')}
  ${article.images.slice(1).map(img => `<img src="${img}" class="article-image">`).join('')}
`;

const likeBtn = document.getElementById("like-btn");
document.getElementById("like-count").textContent = likes;
if (liked) likeBtn.classList.add("liked");

likeBtn.addEventListener("click", () => {
    liked = !liked;
    localStorage.setItem(likedKey, liked);
    likes = liked ? likes + 1 : likes - 1;
    localStorage.setItem(likesKey, likes);
    document.getElementById("like-count").textContent = likes;
    likeBtn.classList.toggle("liked", liked);
});




const currentUrl = window.location.href;
const title = document.querySelector("h1")?.innerText || "Spiritual Article";

document.getElementById("whatsapp-share").href = `https://wa.me/?text=${encodeURIComponent(title)}%0A${encodeURIComponent(currentUrl)}`;
document.getElementById("facebook-share").href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
document.getElementById("twitter-share").href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`;

document.getElementById("native-share").addEventListener("click", async () => {
  if (navigator.share) {
    try {
      await navigator.share({ title, text: title, url: currentUrl });
    } catch (err) {
      console.error("Sharing failed", err);
    }
  } else {
    alert("Sharing not supported on this browser.");
  }
});



const readBtn = document.getElementById("read-btn");

let isReading = false;
let utterance;

readBtn.addEventListener("click", () => {
  if (!('speechSynthesis' in window)) {
    alert("क्षमा करें, आपका ब्राउज़र टेक्स्ट-टू-स्पीच को सपोर्ट नहीं करता।");
    return;
  }

  if (!isReading) {
    const articleText = document.getElementById("listenContent").innerText;

    // Cancel any previous speech
    speechSynthesis.cancel();

    utterance = new SpeechSynthesisUtterance(articleText);
    utterance.lang = "hi-IN";
    utterance.rate = 0.95;

    // Handle when speech ends
    utterance.onend = () => {
      isReading = false;
      readBtn.innerHTML = `<i data-feather="volume-2"></i> यह लेख सुनें`;
    };

    speechSynthesis.speak(utterance);
    isReading = true;
    readBtn.innerHTML = `<i data-feather="volume-x"></i> बंद करें`;
  } else {
    // Stop the reading
    speechSynthesis.cancel();
    isReading = false;
    readBtn.innerHTML = `<i data-feather="volume-2"></i> यह लेख सुनें`;
  }
  feather.replace();
});