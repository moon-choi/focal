const {
  // fetchMyIP,
  // fetchCoordsByIP,
  // fetchISSFlyOverTimes,
  nextISSTimesForMyLocation,
} = require("./iss");
//loading the whole file in the memory.
//fetchMyIP() running the callback with null.
//you want to remove the stuff you dont' use.
//it looks up in the dependency tree.

//waterfall of callbacks

nextISSTimesForMyLocation((error, responses) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  responses.forEach((x) => {
    const schedule = new Date(x.risetime);
    const length = x.duration;
    console.log(`Next pass at ${schedule} for ${length}seconds!`);
  });
});

/// ----THIS WAS THE CODE UP UNTIL EXERCISE 3. ----//

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned IP:", ip);

//   fetchCoordsByIP(ip, (error, data) => {
//     if (error) {
//       console.log("It didn't work!", error);
//       return;
//     }
//     console.log("Your coordinates is: ", data); //{lati long"}

//     fetchISSFlyOverTimes(data, (error, schedule) => {
//       if (error) {
//         console.log("It didn't work!", error);
//         return;
//       }
//       console.log("ISS can be spotted: ", schedule);
//     });
//   });
// });
