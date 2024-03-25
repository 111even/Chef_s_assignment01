// Assignment 02
// Simple Server - HTTP Methods

// Write a simple server to handle the following
// GET/books
// PUT/books
// DELETE/books
// GET/books/author/
// POST/books/author/
// PUT/books/author/

// NB. Whatever the response to each of these endpoints, is up to you to decide.
const http = require('http');

const hostname = 'localhost';
const port = 8900;

const server = http.createServer((req, res) => {
  const { method, url } = req;

  // Handling requests related to '/books'
  if (url === '/books') {
    // Responding to different HTTP methods
    if (method === 'GET') {
      respond(res, 200, { message: 'GET all books' });
    } else if (method === 'PUT') {
      respond(res, 200, { message: 'PUT books' });
    } else if (method === 'DELETE') {
      respond(res, 200, { message: 'DELETE books' });
    }
  } else if (url === '/books/author') {
    // Handling requests related to '/books/author'
    if (method === 'GET') {
      respond(res, 200, { message: 'GET books by author' });
    } else if (method === 'POST') {
      respond(res, 200, { message: 'POST books by author' });
    } else if (method === 'PUT') {
      respond(res, 200, { message: 'PUT books by author' });
    }
  } else {
    // Responding with 'Not Found' for other URLs
    respond(res, 404, 'Not Found');
  }
});

// Function to send response with appropriate status code and data
function respond(res, statusCode, data) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}

server.listen(port, hostname, () => {
  // Logging server start message
  console.log(`Server running at http://${hostname}:${port}/`);
});
