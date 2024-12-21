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
router.post('/add_gallery', upload.array('files'), async (req, res) => {
  try {
    const { title } = req.body;
    const files = req.files ? req.files.map(file => file.filename) : [];

    // Débogage
    console.log("Title:", title);
    console.log("Files:", files);

    // Validation des données
    if (!title || files.length === 0) {
      return res.status(400).json({ error: 'Title and at least one file are required.' });
    }

    // Vérifier les doublons dans la galerie
    const existingGallery = await Gallery.findOne({ where: { title } });
    if (existingGallery) {
      // Si la galerie existe, vérifier si les fichiers existent déjà
      const existingFiles = existingGallery.files || [];
      const newFiles = files.filter(file => !existingFiles.includes(file)); // Filtrer les doublons

      if (newFiles.length === 0) {
        return res.status(400).json({ error: 'No new files to add, all files already exist.' });
      }

      // Ajouter les nouveaux fichiers à la galerie existante
      existingGallery.files = [...existingFiles, ...newFiles];
      await existingGallery.save();

      return res.status(200).json({
        message: 'Gallery updated with new files!',
        gallery: existingGallery,
      });
    }

    // Si la galerie n'existe pas, en créer une nouvelle
    const gallery = await Gallery.create({ title, files });
    res.status(201).json({
      message: 'Gallery added successfully!',
      gallery,
    });
  } catch (error) {
    console.error("Error adding gallery:", error.message);
    res.status(500).json({ error: error.message });
  }
});

// Mettre à jour une galerie
router.put('/update_gallery/:id', upload.array('files'), async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const newFiles = req.files ? req.files.map(file => file.filename) : [];

    // Vérification si la galerie existe
    const gallery = await Gallery.findByPk(id);
    if (!gallery) {
      return res.status(404).json({ error: 'Gallery not found' });
    }

    // Mise à jour du titre (si fourni)
    gallery.title = title || gallery.title;

    // Vérifier les doublons dans les fichiers
    const existingFiles = gallery.files || [];
    const updatedFiles = newFiles.filter(file => !existingFiles.includes(file));

    // Si aucun fichier n'est nouveau, renvoyer une erreur
    if (updatedFiles.length === 0) {
      return res.status(400).json({ error: 'No new files to add, all files already exist.' });
    }

    // Ajouter les nouveaux fichiers
    gallery.files = [...existingFiles, ...updatedFiles];

    // Sauvegarde des modifications
    await gallery.save();

    res.status(200).json({
      message: 'Gallery updated successfully!',
      gallery,
    });
  } catch (error) {
    console.error("Error updating gallery:", error.message);
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
    // Trouver la galerie avec l'ID spécifié
    const gallery = await Gallery.findByPk(galleryId);

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
