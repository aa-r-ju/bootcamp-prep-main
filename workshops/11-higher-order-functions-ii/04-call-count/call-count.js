// YOUR CODE BELOW
function callCount() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

let newFunction1 = callCount();
let newFunction2 = callCount();

console.log(newFunction1());
console.log(newFunction1());

console.log(newFunction2());
console.log(newFunction2());
