let input = process.argv[2];

const reverse = function(original) {
  return original.split('').reverse().join('');
};

if (input)
  console.log(reverse(input));
