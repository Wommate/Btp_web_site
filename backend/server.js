const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const userRoutes = require('./controllers/user.ctrl');
const galleryRoutes = require('./controllers/gallery.ctrl');
const contactRoutes = require('./controllers/contact.ctrl');
const serviceRoutes = require('./controllers/service.ctrl'); 
const blogRoutes = require('./controllers/blog.ctrl');
const quoteRoutes = require('./controllers/quote.ctrl');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//routes api
app.use('/api', userRoutes);
app.use('/api/galleries', galleryRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/services', serviceRoutes); 
app.use('/api/blogs', blogRoutes);
app.use('/api/devis', quoteRoutes);

const PORT = process.env.PORT || 4000;

// Synchronisation avec la base de données
sequelize.sync({ force: false }).then(() => {
  // Récupération du nom de la base de données 
  const dbName = sequelize.getDatabaseName();
  console.log(`Connected to database: ${dbName}`);
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((err) => console.error('Database synchronization failed:', err));
