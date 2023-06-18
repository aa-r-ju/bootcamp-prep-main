// YOUR CODE BELOW
function myIndexOf(source, searchValue, startIdx) {
    if (startIdx === undefined) {
      startIdx = 0;
    }
  
    for (let i = startIdx; i < source.length; i++) {
      let match = true;
  
      for (let j = 0; j < searchValue.length; j++) {
        if (source[i + j] !== searchValue[j]) {
          match = false;
          break;
        }
      }
  
      if (match) {
        return i;
      }
    }
  
    return -1;
  }
  
  console.log(myIndexOf('hello', 'h'));              // Output: 0
  console.log(myIndexOf('hello', 'e'));              // Output: 1
  console.log(myIndexOf('hello', 'l'));              // Output: 2
  console.log(myIndexOf('hello', 'l'));              // Output: 2
  console.log(myIndexOf('hello', 'o'));              // Output: 4
  console.log(myIndexOf('twice twice', 'ice'));       // Output: 2
  console.log(myIndexOf('twice twice', 'ice', 5));    // Output: 8
  console.log(myIndexOf('happy string', 'sad'));      // Output: -1
  