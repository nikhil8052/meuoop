// v1/models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db.js');

const images = sequelize.define('images', {
  imagePath: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  flowId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('true', 'false'),
    allowNull: false
  },  
});

module.exports = images;
