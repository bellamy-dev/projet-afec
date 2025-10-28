const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const { MongoClient } = require('mongodb');
const path = require('path');

const app = express();
const PORT = 3000;

// ========== CONFIGURATION MONGODB ==========
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
const dbName = 'mydb';

let db;
let usersCollection;

// ========== MIDDLEWARE ==========
app.use(cors());
app.use(express.json());

// ========== SERVIR LES FICHIERS STATIQUES ==========
app.use(express.static(__dirname));

// ========== CONNEXION À MONGODB ==========
async function connectDB() {
    try {
        await client.connect();
        console.log('✅ Connecté à MongoDB');

        db = client.db(dbName);
        usersCollection = db.collection('users');
    } catch (error) {
        console.error('❌ Erreur de connexion MongoDB:', error);
        process.exit(1);
    }
}

// ========== ROUTES PAGES HTML ==========

// Page d'accueil
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Page d'inscription ← NOUVELLE ROUTE
app.get('/sign-in', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/html/sign-in.html'));
});

// ========== ROUTES API ==========

// GET - Récupérer tous les utilisateurs
app.get('/api/users', async (req, res) => {
    try {
        console.log('📥 Requête GET /api/users reçue');

        const users = await usersCollection.find({}, { projection: { password: 0 } }).toArray();

        console.log(`📤 Envoi de ${users.length} utilisateur(s)`);
        res.status(200).json(users);

    } catch (error) {
        console.error('❌ Erreur:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// POST - Créer un utilisateur (inscription)
app.post('/api/users/register', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({ error: 'Email et password requis' });
        }

        // Vérifier si l'email existe déjà
        const existingUser = await usersCollection.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ error: 'Cet email est déjà utilisé' });
        }

        // Hasher le mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // Créer le nouvel utilisateur
        const newUser = {
            email,
            password: hashedPassword,
            auth: false,
            createdAt: new Date()
        };

        const result = await usersCollection.insertOne(newUser);

        console.log('✅ Nouvel utilisateur créé:', email);

        res.status(201).json({
            message: 'Utilisateur créé avec succès',
            userId: result.insertedId
        });

    } catch (error) {
        console.error('❌ Erreur:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

// ========== DÉMARRAGE DU SERVEUR ==========
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
        console.log(`📄 Page d'accueil : http://localhost:${PORT}/`);
        console.log(`📝 Page d'inscription : http://localhost:${PORT}/sign-in`);
        console.log(`📡 API users : http://localhost:${PORT}/api/users`);
    });
});
