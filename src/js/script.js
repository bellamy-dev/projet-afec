// ========== RÉCUPÉRATION DES ÉLÉMENTS ==========
const loadUsersBtn = document.getElementById('loadUsersBtn');
const usersContainer = document.getElementById('userList');  // ✅ Corrigé ici

// ========== FONCTION DE CHARGEMENT ==========
async function loadUsers() {
    try {
        // 1. Afficher un message de chargement
        usersContainer.innerHTML = '<p>Chargement...</p>';

        // 2. Faire la requête fetch vers ton serveur
        const response = await fetch('http://localhost:3000/api/users');

        // 3. Vérifier si la réponse est OK
        if (!response.ok) {
            throw new Error('Erreur réseau');
        }

        // 4. Convertir la réponse en JSON
        const users = await response.json();

        // 5. Afficher les utilisateurs

        // Vérifier s'il y a des utilisateurs
        if (users.length === 0) {
            usersContainer.innerHTML = '<p>Aucun utilisateur trouvé</p>';
            return;
        }

        // Créer le HTML
        let html = '<div class="users-list">';

        // Boucler sur chaque utilisateur
        users.forEach(user => {
            html += `
                <div class="user-card">
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Créé le:</strong> ${new Date(user.createdAt).toLocaleDateString()}</p>
                </div>
                
            `;
        });

        html += '</div>';

        // Insérer dans la div
        usersContainer.innerHTML = html;

    } catch (error) {
        // 6. Gérer les erreurs
        usersContainer.innerHTML = '<p>Erreur lors du chargement</p>';
        console.error('Erreur:', error);
    }
}

// ========== AJOUTER L'ÉVÉNEMENT AU BOUTON ==========
loadUsersBtn.addEventListener('click', loadUsers);
