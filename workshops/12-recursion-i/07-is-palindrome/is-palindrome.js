// YOUR CODE BELOW
function isPalindrome(word) {
  if (word.length <= 1) {
    return true;
  }
  if (word[0].toLowerCase() !== word[word.length - 1].toLowerCase()) {
    return false;
  }
  return isPalindrome(word.slice(1, -1));
}
console.log(isPalindrome("Kayak"));
console.log(isPalindrome("NEVERODDOREVEN"));
console.log(isPalindrome("Tacocat"));
console.log(isPalindrome("SELFLESS"));
