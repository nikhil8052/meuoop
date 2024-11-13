// v1/models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db.js');

const flow_type = sequelize.define('flow_type', {
  flowType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('true', 'false'),
    allowNull: false
  },  
});

module.exports = flow_type;
