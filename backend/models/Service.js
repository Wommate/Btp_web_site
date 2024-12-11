const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 

const Service = sequelize.define('Service', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING, 
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  timestamps: true,
});

module.exports = Service;
