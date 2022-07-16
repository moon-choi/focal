/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const request = require("request");
const url = "https://api.ipify.org?format=json";

const fetchMyIP = function (callback) {
  // use request to fetch IP address from JSON API
  request(url, (error, response, body) => {
    const ip = JSON.parse(body).ip;

    if (error) {
      return callback(error, null);
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    return callback(null, ip);
  });
};

const fetchCoordsByIP = function (ip, callback) {
  // const myIP = `https://freegeoip.app/json/${ip}`;
  request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
    const result = JSON.parse(body);
    const latlong = { latitude: result.latitude, longitude: result.longitude };

    if (error) {
      return callback(error, null);
    }

    callback(null, latlong);
  });
};

const fetchISSFlyOverTimes = function (coords, callback) {
  request(
    `https://iss-pass.herokuapp.com/json/?lat=49.2526&lon=-123.1236`,
    (error, response, body) => {
      const result = JSON.parse(body);
      const responses = result.response;
      if (error) {
        return callback(error, null);
      }
      callback(null, responses);
    }
  );
};

const nextISSTimesForMyLocation = function (callback) {
  fetchMyIP((error, ip) => {
    if (error) {
      return callback(error, null);
    }

    fetchCoordsByIP(ip, (error, loc) => {
      if (error) {
        return callback(error, null);
      }

      fetchISSFlyOverTimes(loc, (error, nextPasses) => {
        if (error) {
          return callback(error, null);
        }

        callback(null, nextPasses);
      });
    });
  });
};

module.exports = {
  // fetchMyIP,
  // fetchCoordsByIP,
  // fetchISSFlyOverTimes,
  nextISSTimesForMyLocation,
};

//--------NOTES-------------
// fetchMyIP(); ////why should this be deleted?
//without an argument, callback is going to be null.
//i'm exporting, loading your function.
//TypeError: callback is not a function
// callback is null fetchMyIP(nothing inside == null)
//NaN, null, false
