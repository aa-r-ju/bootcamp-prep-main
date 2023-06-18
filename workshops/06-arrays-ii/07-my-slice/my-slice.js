// YOUR CODE BELOW
function mySlice(originalArray, startIdx, endIdx) {
    if (startIdx === undefined) {
      return [...originalArray];
    }
    if (endIdx === undefined) {
      return originalArray.slice(startIdx);
    }
    return originalArray.slice(startIdx, endIdx);
  }
  
  console.log(mySlice([1, 2, 3], 1, 2)); // Output: [2]
  console.log(mySlice([1, 2, 3], 1)); // Output: [2, 3]
  console.log(mySlice([1, 2, 3])); // Output: [1, 2, 3]
  