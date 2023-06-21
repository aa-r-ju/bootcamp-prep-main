// YOUR CODE BELOW
function onlyOne(a, b, c) {
    var numTruthy = 0;
    
    if (a) {
      numTruthy++;
    }
     
    if (b) {
      numTruthy++;
    }
    
    if (c) {
      numTruthy++;
    }
    
    return numTruthy === 1;
  }
  
  console.log(onlyOne(false, false, true)); // Output: true
  console.log(onlyOne(0, 1, 2)); // Output: false
  