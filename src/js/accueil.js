const users = [
    {email: "test@mail.com", password: "1234"},
    {email: "bellamy.dev@icloud.com", password: "1234"}
];

const loginForm = document.getElementById("loginForm");
const msgError = document.getElementById("message");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        console.log("email", email, password);
        const user = users.find(
            (u) => u.email === email && u.password === password
        );


        if (user) {
            localStorage.setItem("isLoggin", "true");
            localStorage.setItem("currentUser", email);
            window.location.href = "accueil.html";
            msgError.textContent = ("Connexion réussie !");
        } else {
            msgError.textContent = ("Email ou mot de passe incorrect.")
            msgError.style.color = "#E27121"
            msgError.style.backgroundColor = "#C41A1A"
        }
    });
}

