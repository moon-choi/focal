const titleCase = function (text) {
  const split = text.split(" ");
  if (text.length <= 0) {
    return "";
  } else {
    let newArr = [];
    for (let x of split) {
      x = x[0].toUpperCase() + x.slice(1).toLowerCase();
      newArr.push(x);
    }
    return newArr.join(" ");
  }
};

console.log(titleCase("WHAT HAPPENS HERE"));
