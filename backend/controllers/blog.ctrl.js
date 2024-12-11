const express = require('express');
const Blog = require('../models/Blog');
const router = express.Router();

// Créer un blog
router.post('/add_blog', async (req, res) => {
  try {
    const { title, photo, long_description } = req.body;

    if (!title || !photo || !long_description) {
      return res.status(400).json({ error: 'Title, photo, and description are required.' });
    }

    const blog = await Blog.create({ title, photo, long_description });
    res.status(201).json({ message: 'Blog created successfully.', blog });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Lire tous les blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.findAll();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Lire un blog par ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByPk(id);

    if (!blog) {
      return res.status(404).json({ error: 'Blog not found.' });
    }

    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Mettre à jour un blog
router.put('/update_blog/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, photo, long_description } = req.body;

    const blog = await Blog.findByPk(id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found.' });
    }

    blog.title = title || blog.title;
    blog.photo = photo || blog.photo;
    blog.long_description = long_description || blog.long_description;

    await blog.save();
    res.status(200).json({ message: 'Blog updated successfully.', blog });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Supprimer un blog
router.delete('/delete_blog/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByPk(id);

    if (!blog) {
      return res.status(404).json({ error: 'Blog not found.' });
    }

    await blog.destroy();
    res.status(200).json({ message: 'Blog deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
