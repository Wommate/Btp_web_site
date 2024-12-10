// models/gallery.js
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class Gallery extends Model {}

Gallery.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  files: {
    type: DataTypes.JSON, // Pour stocker plusieurs fichiers sous forme d'objets ou d'URLs
    allowNull: false,
    get() {
      return JSON.parse(this.getDataValue('files') || '[]');
    },
    set(value) {
      this.setDataValue('files', JSON.stringify(value));
    },
  },
}, {
  sequelize,
  modelName: 'Gallery',
});

module.exports = Gallery;
