const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  prenom: { type: DataTypes.STRING, allowNull: false },
  nom: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  role: { type: DataTypes.STRING, allowNull: true, defaultValue: "admin" },
  password: { type: DataTypes.STRING, allowNull: false },
  etat: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: true },
}, {
  timestamps: true,  
  tableName: 'users',  // Le nom de la table
});

module.exports = User;
