const url = process.argv[2];
const path = process.argv[3];
const request = require("request");
const fs = require("fs");

const fetch = function (url, path) {
  request(url, (error, response, body) => {
    //downloading it here
    if (error) {
      return console.log(`There is an error, ${url} is invalid.`);
    }

    if (response >= 200 && response < 400) {
      return console.log("statusCode:", response && response.statusCode);
    }

    fs.writeFile(path, body, (err) => {
      //writing it here
      const bytes = body.length;
      if (err) {
        return console.log(`There is an error, ${path} is invalid.`);
      }
      console.log(`Downloaded and saved ${bytes} bytes to ${path}`);
    });
  });
};

fetch(url, path);
