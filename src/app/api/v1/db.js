// v1/db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('meuoop', 'root', '', {
  host: 'localhost', // Your database host
  dialect: 'mysql',
  logging: true, // Set to true if you want to see SQL logs
});

sequelize.authenticate()
  .then(() => console.log('Database connecteddd...'))
  .catch((err) => console.log('Error: ' + err));

module.exports = sequelize;
