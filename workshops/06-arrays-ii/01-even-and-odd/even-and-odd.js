// YOUR CODE BELOW
// YOUR CODE BELOW
function evenAndOdd(array) {
    debugger;
    let even = [];
    let odd = [];
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        even.push(array[i]);
      } else {
        odd.push(array[i]);
      }
    }
  
    return [even, odd];
  }
  
  console.log(evenAndOdd([1, 2, 3, 4, 5, 6]));
  