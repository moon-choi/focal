const http = require("http");
const PORT = 8080;

// a function which handles requests and sends response
const requestHandler = function (request, response) {
  console.log("In requestHandler"); // 4
  if (request.url === "./") {
    response.end(`Welcome`);
  } else if (request.url === "/urls") {
    response.end("www.lighthouselabs.ca\nwww.google.com");
  } else {
    response.end("404 Page not found");
  }
};

const server = http.createServer(requestHandler);
console.log("Server created"); // 1

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`); //3
});

console.log("Last line (after .listen call)"); // 2
