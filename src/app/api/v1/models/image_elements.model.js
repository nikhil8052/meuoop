// v1/models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db.js');

const image_elements = sequelize.define('image_elements', {
  imageId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  elementId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('true', 'false'),
    allowNull: false
  },  
});

module.exports = image_elements;
