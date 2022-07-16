let originalWords = process.argv.slice(2);
let pigLatinWords = [];

for (let i = 0; i < originalWords.length; i++) {
  pigLatinWords.push(translateToPigLatin(originalWords[i]));
}

console.log(pigLatinWords.join(' '));

const translateToPigLatin = function (word) {
  return word.slice(1, word.length) + word[0] + "ay";
};