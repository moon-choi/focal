const nameInverter = function (name) {
  if (name === undefined) {
    return "Error";
  }
  const arr = name.trim().split(" ");
  console.log("Arr:", arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(".")) {
      let name = arr.splice(1);
      console.log(name);
      if (name.length === 0) {
        return "";
      }
      const invertedName = name.reverse().join(", ");
      const fullName = arr[0] + " " + invertedName;
      return fullName;
    }
    // if the name doesn't contain prefix.
    const inverted = arr.reverse().join(", ");
    return inverted;
  }
};

module.exports = nameInverter;
