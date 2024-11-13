const { DataTypes } = require('sequelize');
const sequelize = require('../lib/db'); // Adjusted to use require instead of import

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
});

module.exports = User; // Adjusted to use module.exports
