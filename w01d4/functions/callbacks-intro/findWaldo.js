// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, callback) {
  names.forEach((name, i) => {
    if (name === "Waldo") {
      callback(i);
    }
  });
};

const actionWhenFound = function(index) {
  console.log(`Found Waldo at ${index}!`);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);