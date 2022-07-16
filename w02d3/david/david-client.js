const net = require("net");
const config = {
  host: "4.tcp.ngrok.io", // "localhost" //ngrok:
  port: 11919,
};

const client = net.createConnection(config);

client.on("data", (messageFromServer) => {
  console.log("server says: ", messageFromServer);
});

client.setEncoding("utf-8");

process.stdin.on("data", (data) => {
  client.write(data);
});
