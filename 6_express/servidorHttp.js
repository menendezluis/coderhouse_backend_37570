const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

function endpoint(request, response) {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  response.end("Hello World");
}

const server = http.createServer(endpoint);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
