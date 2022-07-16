const transpose = function(matrix) {
  let bigArr = [];
  for (let row = 0; row < matrix[0].length; row++) {
    let newRow = [];
    for (let col = 0; col < matrix.length; col++) {
      newRow.push(matrix[col][row]);
    }
    bigArr.push(newRow);
  }
  return bigArr;
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

printMatrix(
  transpose([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));



printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));



printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));

