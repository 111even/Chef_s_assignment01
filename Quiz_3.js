// Assignment 03
// 1. Get the authentication username and password from the header.
// 2. Free up the body to be able to carry payload for other method types.
// 3. Add more endpoints for books [GET, POST, PUT, PATCH, DELETE]. (These endpoint don't to do anything, but must return a response)
// 4. Add more endpoints for authors [GET, POST, PUT, PATCH, DELETE]. (These endpoint don't to do anything, but must return a response)

// Import the built-in Node.js 'http' module
const http = require('http');

// Define the server's hostname and port number
const hostname = 'localhost';
const port = 8900;

// Create a server object that listens for incoming requests
const server = http.createServer((req, res) => {
  // Extract the request method (like 'GET' or 'POST') and URL
  const { method, url } = req;

  // Check which method was used in the request
  switch (method) {
    // If the request method is 'GET' (to fetch data)
    case 'GET':
      // Check if the URL is for fetching all books
      if (url === '/books') {
        // Respond with a message saying 'GET all books'
        res.statusCode = 200; // Set status code to 'OK'
        res.setHeader('Content-Type', 'application/json'); // Specify response type as JSON
        res.end(JSON.stringify({ message: 'GET all books' })); // Send the message as JSON
      } else {
        // If the URL is unknown, respond with 'Not Found'
        res.statusCode = 404; // Set status code to 'Not Found'
        res.setHeader('Content-Type', 'text/plain'); // Specify response type as plain text
        res.end('Not Found'); // Send the 'Not Found' message
      }
      break;

    // If the request method is 'POST' (to create new data)
    case 'POST':
      // Check if the URL is for creating a new book
      if (url === '/books') {
        // Respond with a message saying 'POST new book'
        res.statusCode = 201; // Set status code to 'Created'
        res.setHeader('Content-Type', 'application/json'); // Specify response type as JSON
        res.end(JSON.stringify({ message: 'POST new book' })); // Send the message as JSON
      } else {
        // If the URL is unknown, respond with 'Not Found'
        res.statusCode = 404; // Set status code to 'Not Found'
        res.setHeader('Content-Type', 'text/plain'); // Specify response type as plain text
        res.end('Not Found'); // Send the 'Not Found' message
      }
      break;

    // For other request methods like 'PUT', 'PATCH', 'DELETE'
    default:
      // Respond with 'Method Not Allowed'
      res.statusCode = 405; // Set status code to 'Method Not Allowed'
      res.setHeader('Content-Type', 'text/plain'); // Specify response type as plain text
      res.end('Method Not Allowed'); // Send the 'Method Not Allowed' message
  }
});

// Start the server to listen for incoming requests on the defined hostname and port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`); // Log a message when the server starts
});
