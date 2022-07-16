const request = require("request");
const fetchBreedDescription = function (breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`;
  // const brokenUrl = `https://broken.api.thecatapi.com/v1/breeds/search/?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      return callback(`${url} is broken`, null); //instead of console.log, use callback.
    }

    const data = JSON.parse(body);
    const breed = data[0];

    if (breed) {
      callback(null, breed.description);
    } else {
      callback(`${breedName} is not found.`, null);
    }
  });
};

module.exports = { fetchBreedDescription };
