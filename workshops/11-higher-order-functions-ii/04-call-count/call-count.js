// YOUR CODE BELOW
function callCount() {
    let count = 0;
  
    return function() {
      count++;
      return count;
    };
  }
  
  let newFunction1 = callCount();
  console.log(newFunction1()); // Output: 1
  console.log(newFunction1()); // Output: 2
  
  let newFunction2 = callCount();
  console.log(newFunction2()); // Output: 1
  console.log(newFunction2()); // Output: 2
  Explanation