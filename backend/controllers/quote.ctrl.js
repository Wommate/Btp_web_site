//  controllers pour gérer les devis
const express = require('express');
const Quote = require('../models/Quote');
const router = express.Router();

// Créer une nouvelle demande de devis
router.post('/add_devis', async (req, res) => {
  try {
    const { name, email, phone, request } = req.body;

    if (!name || !email || !phone || !request) {
      return res.status(400).json({ error: 'Name, email, phone, and request are required.' });
    }

    const quote = await Quote.create({ name, email, phone, request });
    res.status(201).json({ message: 'Quote request submitted successfully.', quote });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Récupérer toutes les demandes de devis
router.get('/', async (req, res) => {
  try {
    const quotes = await Quote.findAll();
    res.status(200).json(quotes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Récupérer une demande de devis par ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const quote = await Quote.findByPk(id);

    if (!quote) {
      return res.status(404).json({ error: 'Quote not found.' });
    }

    res.status(200).json(quote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Répondre à une demande de devis
router.put('/:id/respond', async (req, res) => {
  try {
    const { id } = req.params;
    const { response } = req.body;

    const quote = await Quote.findByPk(id);

    if (!quote) {
      return res.status(404).json({ error: 'Quote not found.' });
    }

    if (!response) {
      return res.status(400).json({ error: 'Response is required.' });
    }

    quote.response = response;
    quote.status = 'answered';
    await quote.save();

    res.status(200).json({ message: 'Quote responded successfully.', quote });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Supprimer une demande de devis
router.delete('/delete_devis/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      // Vérifiez si la demande de devis existe
      const quote = await Quote.findByPk(id);
  
      if (!quote) {
        return res.status(404).json({ error: 'Quote not found.' });
      }
  
      // Supprimez la demande de devis
      await quote.destroy();
      res.status(200).json({ message: 'Quote deleted successfully.' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
