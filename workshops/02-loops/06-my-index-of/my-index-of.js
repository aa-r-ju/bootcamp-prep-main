// YOUR CODE BELOW
function myIndexOf(source, searchValue, startIdx = 0) {
  for (let i = startIdx; i <= source.length - searchValue.length; i++) {
    let found = true;

    for (let j = 0; j < searchValue.length; j++) {
      if (source[i + j] !== searchValue[j]) {
        found = false;
        break;
      }
    }

    if (found) {
      return i;
    }
  }

  return -1;
}

console.log(myIndexOf("hello", "h"));
console.log(myIndexOf("hello", "e"));
console.log(myIndexOf("hello", "l"));
console.log(myIndexOf("hello", "l"));
console.log(myIndexOf("hello", "o"));

console.log(myIndexOf("twice twice", "ice"));
console.log(myIndexOf("twice twice", "ice", 5));
console.log(myIndexOf("happy string", "sad"));
