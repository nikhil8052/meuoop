// src/app/api/v1/models/index.js

const Sequelize = require('sequelize');
const sequelize = require('../db.js'); // Import the Sequelize instance

// Initialize the db object
const db = {};

// Define models and attach them to the db object
db.uxFlow = require('./uxFlow.model.js'); 
db.images = require('./images.model.js'); 
db.elements = require('./elements.models.js'); 
db.imagesElements = require('./image_elements.model.js'); 

//Association
db.images.hasMany(db.imagesElements, {
  foreignKey: 'id',
  as: 'images'
});

// ImageElements belongs to Images
db.imagesElements.belongsTo(db.images, {
  foreignKey: 'id',
  as: 'images'
});

db.elements.hasMany(db.imagesElements, {
  foreignKey: 'id',
  as: 'elements'
});

// ImageElements belongs to Images
db.imagesElements.belongsTo(db.elements, {
  foreignKey: 'id',
  as: 'elements'
});




// Attach the Sequelize instance and Sequelize class to db for easier access
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Optionally sync all models with the database
sequelize.sync({ alter: true })
  .then(() => {
    console.log('Database synced with all models.');
  })
  .catch((err) => {
    console.error('Error syncing models:', err);
  });

module.exports = db;
