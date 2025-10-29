// Le stockage se compose de deux elements : c'est un objet => clé et une valeur

// saveBtn, message, nom


const saveBtn = document.getElementById("saveBtn");


const message = document.getElementById("message");

const storedName = localStorage.getItem("nom");

const clearBtn = document.getElementById("clearBtn");


if (storedName) {
    message.textContent = `Bonjour, ${storedName} !`;
    message.style.color = "green";

    // Si un nom existe dans le localStorage, on affiche le message de bienvenue au chargement de la page
}

saveBtn.addEventListener("click", function() {
    const nom = document.getElementById("nom").value;
    if (nom) {
        localStorage.setItem("nom", nom);
        message.textContent = `Bonjour, ${nom} !`;
        message.style.color = "green";
    }
    else{
        message.textContent = `Veuillez entrer un nom.`;
        message.style.color = "#F18F01";
        message.style.backgroundColor = "#C73E1D";
    }
});


clearBtn.addEventListener("click", function() {
    localStorage.removeItem("nom");
})
