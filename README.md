# Chef_s_assignment01
Creating HTTP server
// Quiz (Assignment 1)
// Simple Server
// 1. make a http server using node http module
// 2. make sure it return your name when you visit localhost:8900
const http = require('http');

const hostname = 'localhost';
const port = 8900;
const myName = 'Ishaq Abdulrazzaq';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(myName);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
