// YOUR CODE BELOW
function partial(callback, argA) {
    return function(argB) {
      return callback(argA, argB);
    };
  }
  
  function summer(a, b) {
    return a + b;
  }
  
  let sumFive = partial(summer, 5);
  console.log(sumFive(10)); // Output: 15
  