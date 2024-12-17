// controllers/gallery.ctrl.js
const express = require('express');
const Gallery = require('../models/Gallery');
const multer = require('multer');
const router = express.Router();

// Configurer Multer pour les fichiers uploadés
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// Ajouter une nouvelle galerie
router.post('/add_gallery', async (req, res) => {
    try {
      const { title, description, files } = req.body;
  
      // Validation des données
      if (!title || !description || !files || files.length === 0) {
        return res.status(400).json({ error: 'Title, description and at least one file are required.' });
      }
  
      // Créer une nouvelle galerie
      const gallery = await Gallery.create({ title, description, files });
  
      res.status(201).json({
        message: 'Gallery added successfully!',
        gallery,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  

// Mettre à jour une galerie
router.put('/update_gallery/:id', upload.array('files'), async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description } = req.body;
      const files = req.files ? req.files.map(file => file.filename) : [];
  
      // Vérification si la galerie existe
      const gallery = await Gallery.findByPk(id);
      if (!gallery) {
        return res.status(404).json({ error: 'Gallery not found' });
      }
  
      // Mise à jour des informations de la galerie
      gallery.title = title || gallery.title;
      gallery.description = description || gallery.description;
  
      // Si de nouveaux fichiers sont téléchargés, on les ajoute
      if (files.length > 0) {
        gallery.files = [...gallery.files, ...files];
      }
  
      // Sauvegarde des modifications
      await gallery.save();
  
      res.status(200).json({
        message: 'Gallery updated successfully!',
        gallery,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });  
  

// Récupérer toutes les galeries
router.get('/', async (req, res) => {
  try {
    const galleries = await Gallery.findAll();
    res.status(200).json(galleries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Récupérer une seule galerie par son ID 
router.get('/:id', async (req, res) => {
    const galleryId = req.params.id;
  
    try {
      // Trouver la galerie avec l'ID spécifié et ses fichiers associés (si nécessaire)
      const gallery = await Gallery.findByPk(galleryId);
  
      // Vérifier si la galerie existe
      if (!gallery) {
        return res.status(404).json({ error: 'Gallery not found' });
      }
  
      res.status(200).json({
        message: 'Gallery retrieved successfully',
        gallery,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;
