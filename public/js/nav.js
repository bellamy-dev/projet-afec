export function navContainer() {
    return `
        <ul>
            <li><a href="index.html">Accueil</a></li>
            <li><a href="#articles">Articles</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">À propos</a></li>
        </ul>
    `;
}

// Injection de la navigation
document.addEventListener("DOMContentLoaded", function() {
    const navElement = document.getElementById('nav-container');
    if (navElement) {
        navElement.innerHTML = navContainer();
    }
});
