const express = require('express');
const Contact = require('../models/Contact'); 
const router = express.Router();

// Route pour envoyer un message de contact
router.post('/message', async (req, res) => {
  try {
    const { name, subject, email, phone, content } = req.body;

    // Validation simple des champs
    if (!name || !subject || !content || !phone) {
      return res.status(400).json({ error: 'Name, subject, phone, and content are required.' });
    }

    // Créer une nouvelle demande de contact
    const contact = await Contact.create({
      name,
      subject,
      email,
      phone,
      content
    });

    // Réponse réussie
    res.status(201).json({ message: 'Your contact request has been submitted successfully.', contact });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
