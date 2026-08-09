// YOUR CODE BELOW
function mySlice(originalArray, startIdx, endIdx) {
  let result = [];

  if (startIdx === undefined) {
    startIdx = 0;
  }

  if (startIdx < 0) {
    startIdx = originalArray.length + startIdx;
  }

  if (endIdx === undefined) {
    endIdx = originalArray.length;
  }

  if (endIdx < 0) {
    endIdx = originalArray.length + endIdx;
  }

  for (let i = startIdx; i < endIdx; i++) {
    result.push(originalArray[i]);
  }

  return result;
}
console.log(mySlice([1, 2, 3], 1, 2));
console.log(mySlice([1, 2, 3], 1));
console.log(mySlice([1, 2, 3]));
console.log(mySlice([1, 2, 3], -1));
