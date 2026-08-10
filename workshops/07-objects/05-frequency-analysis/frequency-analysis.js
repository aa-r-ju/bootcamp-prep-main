// YOUR CODE BELOW
function frequencyAnalysis(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let small = str[i].toLowerCase();
    if (small in obj) {
      obj[small] += 1;
    } else {
      obj[small] = 1;
    }
  }
  return obj;
}
console.log(frequencyAnalysis("abcd"));
console.log(frequencyAnalysis("abca"));
console.log(frequencyAnalysis("ababababab"));
