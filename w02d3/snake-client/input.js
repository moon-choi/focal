const { KEYS } = require("./constants");

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); //handleUserinput is callback.
  return stdin;
};

const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  } else if (key === "w") {
    connection.write(KEYS.w);
  } else if (key === "a") {
    connection.write(KEYS.a);
  } else if (key === "s") {
    connection.write(KEYS.s);
  } else if (key === "d") {
    connection.write(KEYS.d);
  }
};

module.exports = { setupInput };
