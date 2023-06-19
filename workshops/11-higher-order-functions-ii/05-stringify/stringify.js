// YOUR CODE BELOW
function stringify(callback) {
    return function() {
      let result = callback();
      return String(result);
    };
  }
  
  function returnsANumber() {
    return 100;
  }
  
  let newFunction = stringify(returnsANumber);
  console.log(newFunction()); // Output: '100'