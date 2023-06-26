// YOUR CODE BELOW
function mySlice(originalString, startIdx = 0, endIdx = originalString.length) {
    if (startIdx === undefined && endIdx === undefined) {
      return originalString;
     }
     let store = ''
for(let i = startIdx; i < endIdx; i++) {
 originalString[i]
 store +=originalString[i];
}

return store
}
debugger
  console.log(mySlice('a piece of pie', 2));       // Output: ice and dice
   console.log(mySlice('a piece of pie', 2, 7));    // Output: ice
   console.log(mySlice('a piece of pie'));          // Output: slice and dice
  