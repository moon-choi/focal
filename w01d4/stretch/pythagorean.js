const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 },
];

const result = input.map((el) => Math.sqrt(Math.pow(el.x, 2) + Math.pow(el.y, 2)));

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);

// without using map
// const getZ = function(arr) {
//   let result = [];

//   for (const el of arr) {
//     let xVal = el.x
//     let yVal = el.y
//     let zVal = Math.sqrt(Math.pow(xVal, 2) + Math.pow(yVal, 2))
//     result.push(el.z = zVal)
//   }
//   return result
// }

// console.log(getZ(input))
