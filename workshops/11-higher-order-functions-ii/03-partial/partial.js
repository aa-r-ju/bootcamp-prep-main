// YOUR CODE BELOW
function partial(callback, arg) {
  return function (num) {
    return callback(arg, num);
  };
}

function summer(a, b) {
  return a + b;
}

let sumFive = partial(summer, 5);
console.log(sumFive(10));
