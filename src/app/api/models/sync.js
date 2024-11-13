const sequelize = require('../lib/db'); // Import your Sequelize instance
const User = require('./User'); // Import your User model or any other models you want to sync

async function syncDatabase() {
  try {
    // Sync all defined models to the database
    await sequelize.sync({ force: true }); // WARNING: This will drop tables if they exist. Use `{ force: false }` in production
    console.log('Database synced successfully.');

    // You can also sync individual models if you prefer
    // await User.sync({ force: true });

    // If you just want to add/alter tables without dropping them, use:
    // await sequelize.sync({ alter: true });

  } catch (error) {
    console.error('Error syncing database:', error);
  } finally {
    // Close the connection
    sequelize.close();
  }
}

// Run the sync
syncDatabase();
