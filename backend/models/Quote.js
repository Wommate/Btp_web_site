// Models pour gérer les dévis 
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Quote = sequelize.define('Quote', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  request: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  response: {
    type: DataTypes.TEXT, // Stocke la réponse à la demande
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('pending', 'answered'),
    defaultValue: 'pending',
  },
}, {
  timestamps: true,
});

module.exports = Quote;
