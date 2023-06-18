// YOUR CODE BELOW
function exponentiate(base, power) {
    let result = 1;
  
    for (let i = 0; i < power; i++) {
      result *= base;
    }
  
    return result;
  }
  
  console.log(exponentiate(2, 2)); // Output: 4
  console.log(exponentiate(3, 4)); // Output: 81
  