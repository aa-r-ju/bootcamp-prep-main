// YOUR CODE BELOW
let counter = 0;

function incrementalChange(amount) {
  counter += amount;
  return counter;
}

console.log(incrementalChange(2)); // Output: 2
console.log(incrementalChange(6)); // Output: 8
console.log(incrementalChange(-1)); // Output: 7
