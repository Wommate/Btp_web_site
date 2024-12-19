const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 

const Contact = sequelize.define('Contact', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true, // facultatif
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  notified: { 
    type: DataTypes.BOOLEAN, 
    defaultValue: true   
  }
}, {
  timestamps: true, 
});

module.exports = Contact;
