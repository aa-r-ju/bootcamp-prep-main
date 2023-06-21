// YOUR CODE BELOW
function myOr(a, b, c) {
    return a || b || c;
  }
  
  function myAnd(a, b, c) {
    return a && b && c;
  }
  
  console.log(myOr(true, true, false) === (true || true || false)); // Output: true
  console.log(myAnd(1, 'apples', true) === (1 && 'apples' && true)); // Output: true
    