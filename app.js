// app.js
const express = require('express');
const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Exemple de route GET
app.get('/', (req, res) => {
  res.send('Hello World ! Backend is ready.');
});

// Exemple route POST
app.post('/test', (req, res) => {
  console.log(req.body);
  res.json({ message: 'Data received', data: req.body });
});

module.exports = app;