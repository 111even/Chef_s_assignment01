// Assignment 04
// Build app using express
// create Author Router in another file
//  this should have CRUD endpoints (Create, Read, Update, Delete)
// Link it to the main file (index.js or server.js or app.js, whatever you chose to use)
// Add a global simple logger to the app.

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample data - you would typically use a database
let authors = [];

// Middleware for logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Middleware for parsing JSON bodies
app.use(express.json());

// CRUD Endpoints for Authors
app.post('/authors', (req, res) => {
  const { name, age } = req.body;
  const newAuthor = { id: authors.length + 1, name, age };
  authors.push(newAuthor);
  res.status(201).json(newAuthor);
});

app.get('/authors', (req, res) => {
  res.json(authors);
});

app.put('/authors/:id', (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  const authorIndex = authors.findIndex(author => author.id === parseInt(id));
  if (authorIndex !== -1) {
    authors[authorIndex] = { ...authors[authorIndex], name, age };
    res.json(authors[authorIndex]);
  } else {
    res.status(404).json({ message: 'Author not found' });
  }
});

app.delete('/authors/:id', (req, res) => {
  const { id } = req.params;
  authors = authors.filter(author => author.id !== parseInt(id));
  res.sendStatus(204);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // run with node Quiz_4.js


});

// when