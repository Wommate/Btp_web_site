// 
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class Gallery extends Model {}

Gallery.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  files: {
    type: DataTypes.JSON, 
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
