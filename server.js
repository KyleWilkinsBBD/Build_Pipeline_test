// Import the http module
const http = require('http');

// Define the server
const server = http.createServer((req, res) => {
    // Set the response header with HTTP status and content type
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body
    res.end('Hello, World!\n');
});

// Define the port to listen on
const PORT = 3000;

// Start the server
server.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`);
});
