// YOUR CODE BELOW
function myOr(...arg) {
  for (let i = 0; i < arg.length; i++) {
    if (arg[i]) {
      return arg[i];
    }
  }
  return arg[arg.length - 1];
}

function myAnd(...arg) {
  for (let i = 0; i < arg.length; i++) {
    if (!arg[i]) {
      return arg[i];
    }
  }
  return arg[arg.length - 1];
}

console.log(myAnd(1, "apples", true));
console.log(myAnd(0, "apples", true));
console.log(myAnd(5, "apples", false));
console.log(myAnd(9, "orange", "ball"));
