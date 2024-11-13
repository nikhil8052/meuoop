const express = require('express');
const next = require('next');
const flowRoutes = require('./src/app/api/v1/routes/flow.routes.js'); // Ensure this path is correct
const sequelize = require('./src/app/api/v1/db');  // Import the DB connection file
const User = require('./src/app/api/v1/models/uxFlow.model.js');  // Import your models

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(express.json());

  // Use the routes defined in v1
  server.use('/api/v1', flowRoutes);

  server.get('/', (req, res) => {
    res.send('Hello World');
  });


  // Sync database with models
  sequelize.sync({ alter: true })  // Use `alter: true` to only make necessary changes (don't drop tables)
    .then(() => {
      console.log('Database synced...');
    })
    .catch((err) => {
      console.error('Error syncing the database:', err);
    });

  // Database connection check
  sequelize.authenticate()
    .then(() => {
      console.log('Database connected...');
    })
    .catch((err) => {
      console.error('Error connecting to the database:', err);
    });

  // All other requests are handled by Next.js
  server.all('*', (req, res) => handle(req, res));

  // Server should run on port 3000
  server.listen(4000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:4000');
  });
});
