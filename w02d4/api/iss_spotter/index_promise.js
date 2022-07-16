const { nextISSTimesForMyLocation } = require("./iss_promise");

nextISSTimesForMyLocation()
  .then((responses) => {
    responses.forEach((x) => {
      const schedule = new Date(x.risetime);
      const length = x.duration;
      console.log(`Next pass at ${schedule} for ${length}seconds!`);
    });
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
