// YOUR CODE BELOW
function countVowels(str) {
  if (str.length === 0) {
    return 0;
  }
  let count = 0;
  let vowels = "aeiou";
  let currentVal = str[str.length - 1].toLowerCase();
  if (vowels.includes(currentVal)) {
    return 1 + countVowels(str.slice(0, -1));
  } else {
    return countVowels(str.slice(0, -1));
  }
}
console.log(countVowels("Four score and seven years"));
