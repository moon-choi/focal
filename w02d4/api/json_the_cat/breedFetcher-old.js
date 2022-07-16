const request = require("request");
const input = process.argv[2];
const url = `https://api.thecatapi.comwerer/v1/breeds/search/?q=${input}`;

request(url, (error, response, body) => {
  // these are two separate conditions that don't relate to each other.
  if (error) {
    //only looking at the error. if error exists, then kill it.
    return console.log(`${url} is broken`, error); //best practice.
    // return; //this works too.
  }
  // declare variable here because error case doesn't need it.
  const data = JSON.parse(body); //data is still an array
  const breed = data[0];

  if (breed) {
    //if this === true; <- if this exists.
    console.log(breed.description);
  } else {
    console.log(`${input} not found.`); //it has to come at the end because this is my else statement.
  }
});

// when the url is broken
// when you write unexisting cat name

// console.log(`${breed} is not found`);
