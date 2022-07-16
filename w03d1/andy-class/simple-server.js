const http = require("http");
const port = 8004;
const server = http.createServer();

server.listen(port, () => {
  console.log(`the server is listening on port ${port}`); //browser made a request to server, but server is not doing anything YET.
});

// listen for incoming requests
server.on("request", (request, response) => {
  //REQUEST, RESPONSE are OBJECTS!
  console.log("a request has come in!");
  console.log("request method", request.method); //GET
  console.log("request url", request.url);

  response.write("welcome to our website"); //adds info to the envelope

  // WE CAN CREATE SEPARATE app.get by using express.
  if (request.url === "/about") {
    response.write("this is the about page");
  } else if (request.url === "/product") {
    response.write("all the products in the database");
  } else {
    response.write("this is not the page you are looking for"); //for this case, express handles on its own. if express can't find the page, then it sends 404 automatically. "Cannot GET /xyz"
  }

  response.end();
});
