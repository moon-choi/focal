const isPalindrome = function(s) {
  s = s.replace(/\s/g, '');
  let stringReverse = s.split("").reverse().join("");
  return s == stringReverse;
};
module.exports = isPalindrome;


