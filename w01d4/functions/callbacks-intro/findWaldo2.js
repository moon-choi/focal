// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names) {
  names.forEach((name, i) => {
    if (name === "Waldo") {
      console.log(`Found Waldo at ${i}!`);
    }
  });
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"]);