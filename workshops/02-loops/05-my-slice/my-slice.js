// YOUR CODE BELOW
function mySlice(originalString, startIdx, endIdx) {
  let newStr = "";

  if (startIdx === undefined) startIdx = 0;
  if (endIdx === undefined) endIdx = originalString.length;

  for (let i = startIdx; i < endIdx; i++) {
    newStr += originalString[i];
  }
  return newStr;
}

console.log(mySlice("slice and dice", 2));
console.log(mySlice("slice and dice", 2, 5));
console.log(mySlice("slice and dice"));
