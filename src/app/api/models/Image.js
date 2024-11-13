const { DataTypes } = require('sequelize');
const sequelize = require('../lib/db'); // Adjusted to use require instead of import

const Image = sequelize.define('Image', {
  flow_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  order_id: {
    type: DataTypes.INTEGER,
    allowNull: true, // Allow null if images don't always have an associated order
  },
  status: {
    type: DataTypes.INTEGER,
    defaultValue: 1, // Assuming 1 for active status
  },
  access: {
    type: DataTypes.STRING,
    allowNull: true, // Assuming it's optional; can be 'public' or 'restricted'
  },
  is_paid: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Image; // Adjusted to use module.exports
