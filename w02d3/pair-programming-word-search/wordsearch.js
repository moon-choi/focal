const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  const verticalJoin = joinVertically(letters).map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (l of verticalJoin) {
    console.log(l);
    if (l.includes(word)) return true;
  }

  return false;
};

const joinVertically = (letters) => {
  const newArr = [];

  for (let row = 0; row < letters[0].length; row++) {
    newArr.push([]);

    for (let col = 0; col < letters.length; col++) {
      newArr[row].push(letters[col][row]);
    }
  }

  return newArr;
};

console.log(
  joinVertically([
    ["A", "W", "C", "F", "Q", "U", "A", "L"],
    ["S", "E", "I", "N", "F", "E", "L", "D"],
    ["Y", "F", "C", "F", "Q", "U", "A", "L"],
    ["H", "M", "J", "T", "E", "V", "R", "G"],
    ["W", "H", "C", "S", "Y", "E", "R", "L"],
    ["B", "F", "R", "E", "N", "E", "Y", "B"],
    ["U", "B", "T", "W", "A", "P", "A", "I"],
    ["O", "D", "C", "A", "K", "U", "A", "S"],
    ["E", "Z", "K", "F", "Q", "U", "A", "L"],
  ])
);

module.exports = wordSearch;
