const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

const gracefulShutdown = () => {
  server.close(() => {
    console.log('Server closed gracefully.');
    process.exit(0); // Ensure process exits after closure
  });
  console.log('Shutting down gracefully...')
};

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});
//Solution: Handle SIGINT and SIGTERM signals to gracefully shut down the server using server.close() and process.exit().