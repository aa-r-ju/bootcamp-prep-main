// YOUR CODE BELOW
function functionLogger(fun, number) {
  console.log("Function starting");
  let result = fun(number);
  console.log("Function complete");
  return result;
}
function squareNum(x) {
  return x * x;
}

let squareOfFour = functionLogger(squareNum, 4);
console.log(squareOfFour);
