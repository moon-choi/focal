const net = require("net");
const port = 12345; // 54321

const server = net.createServer();
console.log(server); //server is an object so we can call method off of that

const connections = [];

// now set up a listener on our connection
server.on("connection", (connection) => { // "connection" is an event
// (connection) parameter is an  object from socket(client)
// we don't define connection bcs it's a placeholder for what object server is returning. connection = object...(first class, so can be passed in as a parameter)
console.log("a new client has connected.");
connection.write("hello there");

connections.push(connection);

//set up a data listener
connection.on("data", (messageFromClient) => {
  //socket is connecting to socket.
  console.log(`${connection.username} says: ${messageFromClient.trim()}`);
  if (messageFromClient.startsWith("setName:")) {
    const name = messageFromClient.split(" ")[1].trim();
    return (connection.username = name);
  }
  console.log(`${connection.username} says: ${messageFromClient.trim()}`);

  for (const con of connections) {
    if (con !== connection && !con._writableState.finished) {
      con.write(`${connection.username} says: ${messageFromClient.trim()}`);
    }
  }

  connection.setEncoding("utf-8");
});
server.listen(port, () => {
  console.log(`the server is listening on port ${port}`); //we give a callback.
}); // if we don't get command line back, we are listening.
