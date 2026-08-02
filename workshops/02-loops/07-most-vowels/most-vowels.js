// YOUR CODE BELOW
function mostVowels(str) {
  let high = 0;
  let result = "";

  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i].replace(/[.,!?]/g, "");

    let count = 0;

    for (let j = 0; j < word.length; j++) {
      let ch = arr[i][j].toLowerCase();
      if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
        count++;
      }
    }
    if (count > high) {
      high = count;
      result = word;
    }
  }
  return result;
}

console.log(mostVowels("try my gym"));
console.log(mostVowels("I am a keeper with some real rhythms"));
console.log(mostVowels("HELLO world!")); // "HELLO"
