//This will serve as your main file through which you will launch the game client.

const { connect } = require("./client.js");
const { setupInput } = require("./input.js");

console.log("Connecting ...");

const conn = connect();

setupInput(conn);
