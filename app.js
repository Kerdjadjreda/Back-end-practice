// app.js
const express = require('express');
const app = express();

// Middleware pour parser le JSON
app.use(express.json());

let users = [];

// Exemple de route GET
app.get('/users', (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) =>{
  const newUser = {
    id: users.length +1,
    name: req.body.name,
    age: req.body.age
  };

  users.push(newUser);
  res.status(201).json(newUser);

});

// Exemple route POST
app.post('/test', (req, res) => {
  console.log(req.body);
  res.json({ message: 'Data received', data: req.body });
});

module.exports = app;