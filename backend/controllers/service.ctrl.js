const express = require('express');
const Service = require('../models/Service');
const router = express.Router();

// Création d'un service
router.post('/add_service', async (req, res) => {
  try {
    const { title, photo, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ error: 'Title and description are required.' });
    }

    const newService = await Service.create({ title, photo, description });
    res.status(201).json({ message: 'Service created successfully', newService });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Récupérer tous les services
router.get('/', async (req, res) => {
  try {
    const services = await Service.findAll();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Récupérer un service par son ID
router.get('/:id', async (req, res) => {
  try {
    const service = await Service.findByPk(req.params.id);
    if (!service) {
      return res.status(404).json({ error: 'Service not found.' });
    }
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Mise à jour d'un service
router.put('/update_service/:id', async (req, res) => {
  try {
    const { title, photo, description } = req.body;

    const service = await Service.findByPk(req.params.id);
    if (!service) {
      return res.status(404).json({ error: 'Service not found.' });
    }

    await service.update({ title, photo, description });
    res.status(200).json({ message: 'Service updated successfully', service });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Supprimer un service
router.delete('/delete_service/:id', async (req, res) => {
  try {
    const service = await Service.findByPk(req.params.id);
    if (!service) {
      return res.status(404).json({ error: 'Service not found.' });
    }

    await service.destroy();
    res.status(200).json({ message: 'Service deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
