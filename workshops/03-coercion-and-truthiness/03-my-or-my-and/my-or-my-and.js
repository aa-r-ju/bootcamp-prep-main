// YOUR CODE BELOW
function myOr(...arg) {
  for (let i = 0; i < arg.length; i++) {
    if (arg[i]) {
      return arg[i];
    }
  }
  return arg[arg.length - 1];
}
console.log(myOr(true, true, false));
console.log(myOr(false, false, true));
console.log(myOr(false, false, false));
console.log(myOr("apple", false, false));
console.log(myOr(0, "", false));
