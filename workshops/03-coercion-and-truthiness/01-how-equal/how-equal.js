// YOUR CODE BELOW
function howEqual(value1, value2) {
    if (value1 === value2) {
      return 'strictly';
    } else if (value1 == value2) {
      return 'loosely';
    } else {
      return 'not equal';
    }
  }
  
  console.log(howEqual(0, '0')); // Output: loosely
  console.log(howEqual(3, 9/3)); // Output: strictly
  console.log(howEqual(true, 'truthy')); // Output: not equal
  