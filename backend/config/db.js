const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('wommate_btp_web_site', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // désactiver les logs SQL
});




sequelize
  .authenticate()
  .then(() => console.log('Connection to MySQL has been established successfully.'))
  .catch((error) => console.error('Unable to connect to the database:', error));

module.exports = sequelize;
