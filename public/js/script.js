import { articles } from "./data.js";

document.addEventListener("DOMContentLoaded", function() {

    const container = document.getElementById('container');

    if (container) {
        articles.forEach(article => {

            const card = document.createElement("div");
            card.classList.add("article-card");

            card.innerHTML = `
                <img src="${article.image}" alt="${article.titre}">
                <h3>${article.titre}</h3>
                <p class="date">${article.date}</p>
                <a href="article.html?id=${article.id}"> Voir plus </a>
            `;

            container.appendChild(card);


            card.innerHTML = `
                <img src="${article.image}" alt="${article.titre}">
                <h3>${article.titre}</h3>
                <p class="date">${article.date}</p>
                <a href="article.html?id=${article.id}"> Voir plus </a>
            `;

            main-content.appendChild(card);
        });
    }
});
