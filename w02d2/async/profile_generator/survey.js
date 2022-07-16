const readline = require("readline");
const { callbackify } = require("util");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('What gender are you? ', (answer1) => {
  console.log(`Your gender is ${answer1}`);
  rl.question('What is your name? ', (answer2) => {
    console.log(`Your name is ${answer2}`);
    rl.question('What is your hobby? ', (answer3) => {
      console.log(`Your hobby is ${answer3}`);
      console.log(`Your gender is ${answer1}. Your name is ${answer2}, and your hobby is ${answer3}`);
      rl.close();
    });
  });
});

// solution 2 - jordan
// const surveyor = function (question) {
//   rl.question(question, (answer) => {
//     console.log(`Your answer is ${answer}`), surveyor2("q2: ");

//   });
// };
// const surveyor2 = function (question) {
//   rl.question(question, (answer) => {
//     console.log(`Your answer is ${answer}`);
//     rl.close();
//   });
// };

// rl.question("Q1: What gender are you? ", (answer1) => {
//   console.log(`Your gender is ${answer1}`), surveyor('Q2: what is your name? ');
// });

// surveyor("q1 : ");
