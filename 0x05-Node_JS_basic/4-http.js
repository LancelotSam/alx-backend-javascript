const http = require('http');

const PORT = 1245;
const HOST = 'localhost';

// Create the HTTP server
const app = http.createServer((req, res) => {
  const responseText = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', Buffer.byteLength(responseText));
  res.statusCode = 200;
  res.end(responseText);
});

// Start listening for requests
app.listen(PORT, HOST, () => {
  console.log(`Server listening at -> http://${HOST}:${PORT}`);
});

module.exports = app;
