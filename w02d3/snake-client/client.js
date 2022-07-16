const net = require("net");
const { IP, PORT, NAME, SAY } = require("./constants");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write(`Name: ${NAME}`);
    conn.write(`Say: ${SAY}`);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = { connect };

//SET TIME OUT PRACTICE
// conn.on("connect", () => {
// setTimeout(() => {
//   conn.write("Move: up");
// }, 1000);
// });
