# ✅ Bien
git commit -m "feat: ajouter système de connexion"
git commit -m "fix: corriger bug d'affichage"
git commit -m "docs: mettre à jour README"

# ❌ Mal
git commit -m "fix"
git commit -m "update"

git checkout -b feature/login
git checkout -b bugfix/header-display
git checkout -b hotfix/security-patch

# 1. Récupérer les derniers changements
git pull origin main

# 2. Créer une branche pour ta fonctionnalité
git checkout -b feature/ma-nouvelle-fonctionnalite

# 3. Travailler et commiter
git add .
git commit -m "feat: ajouter ma fonctionnalité"

# 4. Pousser et créer une PR
git push origin feature/ma-nouvelle-fonctionnalite
