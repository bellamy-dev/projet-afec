import { articles } from "./data.js";

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = parseInt(urlParams.get('id'));

    const article = articles.find(a => a.id === articleId);

    const articleDetail = document.getElementById('article-detail');

    if (article && articleDetail) {
        articleDetail.innerHTML = `
            <img src="${article.image}" alt="${article.titre}">
            <h1>${article.titre}</h1>
            <p class="date">Publié le ${article.date}</p>
            <div class="content">
                <p>${article.contenu}</p>
            </div>
        `;
    } else if (articleDetail) {
        articleDetail.innerHTML = `
            <h1>Article non trouvé</h1>
            <p>Désolé, l'article demandé n'existe pas.</p>
        `;
    }
});
