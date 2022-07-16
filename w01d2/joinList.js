/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below

//apr solution

const rollDice = function(number) {
  let arr = [];
  for (let i = 0; i < number; i++) {
    arr.push(1 + Math.floor(Math.random() * 6));
  }
  return "Rolled 3 dice " + arr.join(', ');
};

console.log(rollDice(3));
  




// feb solution
// const joinList = function (array) {
//   let joinedArray = "";
//   for (let i = 0; i < array.length; i++) {
//     if (i < array.length - 1) {
//       joinedArray += array[i] + ", ";
//     } else {
//       joinedArray += array[i] + "";
//     }
//   }
//   return joinedArray;
// };

// // Test / Driver Code below...
// const conceptList = [
//   "gists",
//   "types",
//   "operators",
//   "iteration",
//   "problem solving",
// ];
// const concepts = joinList(conceptList);
// console.log(`Today I learned about ${concepts}.`);
