const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/User');

// Inscription
router.post('/register', async (req, res) => {
  try {
    const { prenom, nom, email, role, password, etat } = req.body;
    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({ prenom, nom, email, role, password: hash, etat });
    res.status(201).json({ message: 'Inscription réussie !', user });
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
});

// Connexion
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (!user) return res.status(401).json({ message: 'Compte non existant !' });

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Mot de passe incorrect !' });

    if (user.etat === false) return res.status(401).json({ message: 'Le compte est désactivé !' });

    const token = jwt.sign({ email: user.email, id: user.id }, 'longer-secret-is-better', { expiresIn: '6h' });

    res.status(200).json({ token, expiresIn: 3600, user });
  } catch (error) {
    res.status(500).json({ message: 'Erreur interne', error });
  }
});

// Modifier un utilisateur
router.put('/update_user/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.update(req.body, { where: { id } });
    res.status(200).json({ message: 'Modification réussie', updatedUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Récupérer tous les utilisateurs
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Récupérer un utilisateur par ID
router.get('/read_user/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: 'Utilisateur introuvable' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
