// YOUR CODE BELOW
function isTruthy(arg) {
  if (arg === false) {
    return "The boolean value false is falsey";
  } else if (arg === null) {
    return "The null value is falsey";
  } else if (arg === undefined) {
    return "undefined is falsey";
  } else if (arg === 0) {
    return "The number 0 is falsey (the only falsey number)";
  } else if (arg === "") {
    return "The empty string is falsey (the only falsey string)";
  } else {
    return true;
  }
}
console.log(isTruthy("I yearn for truth"));
console.log(isTruthy(null));
console.log(isTruthy(false));
console.log(isTruthy(undefined));
console.log(isTruthy(0));
console.log(isTruthy(""));
