var val = 5.5;
var string = '123string';


console.log(Number(val)) // takes the number as is. 
console.log(parseInt(val)) // only takes whole number.

console.log(Number(string)) //NaN
console.log(parseInt(string)) //123

if (isNaN(Number(nb))) {
  console.log("Error: Please input only numbers");
  process.exit(); // killing the node process
}