// YOUR CODE BELOW
function zeroDarkThirty(number) {
  if (number === 0) {
    return NaN;
  }
  let str = String(number);
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "0") {
      result += str[i];
    }
  }
  return Number(result);
}
console.log(zeroDarkThirty(102302));
console.log(zeroDarkThirty(606.203));
console.log(zeroDarkThirty(0));
