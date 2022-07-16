const rollDice = function(rolls){
  let numbers = [];
  let number;

  for (let i = 0; i < rolls; i++) {
    number = Math.floor(Math.random() * 6) + 1;
    numbers.push(number);
  } 
  console.log(`Rolled 3 dice: ${numbers}`);
}
rollDice(8);
