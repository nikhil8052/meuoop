// v1/models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db.js');

const elements = sequelize.define('elements', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('true', 'false'),
    allowNull: false
  },  
});

module.exports = elements;
