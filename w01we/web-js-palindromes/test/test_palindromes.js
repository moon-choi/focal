const assert = require("chai").assert;
const isPalindrome = require("../lib/palindromes");

describe("Palindromes", function() {
  it("should return true if a word is a palindrome", function() {
    const word = "abba";
    const result = isPalindrome(word);
    assert.isTrue(result);
  });
  
  it("should return false if a word is NOT a palindrome", function() {
    const word = "not";
    assert.isFalse(isPalindrome(word));
  });
  
  it("should return true if a phrase is a palindrome", function() {
    const phrase = "a man a plan a canal panama";
    assert.isTrue(isPalindrome(phrase));
  });
  
  it("should return false if a phrase is NOT a palindrome", function() {
    const phrase = "this is not a palindrome"
    assert.isFalse(isPalindrome(phrase));
  });
});

