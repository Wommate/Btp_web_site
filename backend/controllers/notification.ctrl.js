const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();

// Route pour récupérer les notifications des contacts
router.get('/get_notifications', async (req, res) => {
  try {
    // Récupérer toutes les notifications où "notified" est vrai (1)
    const notifications = await Contact.findAll({
      where: { notified: 1 }, 
      order: [['createdAt', 'DESC']], 
    });

    // Vérification si des notifications existent
    if (!notifications || notifications.length === 0) {
      return res.status(404).json({ message: 'No notifications found' });
    }

    // Renvoi des notifications sous forme de JSON
    return res.status(200).json(notifications);
  } catch (error) {
    // Gestion des erreurs
    console.error('Error fetching notifications:', error);
    return res.status(500).json({ error: 'An error occurred while fetching notifications' });
  }
});

// Route pour marquer une notification comme lue
router.put('/read/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findByPk(id);

    if (!contact) {
      return res.status(404).json({ error: 'Notification not found.' });
    }

    // Marquer la notification comme lue
    contact.notified = 0; 
    await contact.save();

    res.status(200).json({ message: 'Notification marked as read.', contact });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route pour récupérer les notifications archivées
router.get('/get_read_notifications', async (req, res) => {
  try {
    // Récupérer toutes les notifications où "notified" est 0 (marquées comme lues)
    const readNotifications = await Contact.findAll({
      where: { notified: 0 },
      order: [['createdAt', 'DESC']], 
    });

    // Si aucune notification n'est trouvée
    if (readNotifications.length === 0) {
      return res.status(404).json({ message: 'No read notifications found' });
    }

    // Renvoi des notifications marquées comme lues sous forme de JSON
    res.status(200).json(readNotifications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});


// Compter les notifications lues et non lues 
router.get('/count_notifications', async (req, res) => {
  try {
    const unreadCount = await Contact.count({ where: { notified: 1 } });
    const readCount = await Contact.count({ where: { notified: 0 } });
    const allContact = await Contact.count(); 
    // const allContact = await Contact.count({ where: { notified: [0, 1] } });


    res.status(200).json({ unread: unreadCount, read: readCount, total: allContact });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
