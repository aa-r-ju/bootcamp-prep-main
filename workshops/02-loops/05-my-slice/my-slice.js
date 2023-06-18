// YOUR CODE BELOW
function mySlice(originalString, startIdx, endIdx) {
    if (startIdx === undefined && endIdx === undefined) {
      return originalString;
    }
  
    if (startIdx === undefined) {
      startIdx = 0;
    }
  
    if (endIdx === undefined) {
      endIdx = originalString.length;
    }
  
    return originalString.slice(startIdx, endIdx);
  }
  
  console.log(mySlice('slice and dice', 2));       // Output: ice and dice
  console.log(mySlice('slice and dice', 2, 5));    // Output: ice
  console.log(mySlice('slice and dice'));          // Output: slice and dice
  