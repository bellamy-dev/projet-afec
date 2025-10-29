const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("isLoggin");
        localStorage.removeItem("currentUser");
        window.location.href = "login.html";

    })
    if (window.location.pathname.endsWith("accueil.html")) {
        if (localStorage.getItem("isLoggin") !== "true") {
            window.location.href = "login.html";
        }
    }
}
