// YOUR CODE BELOW
function myUnshift(arr, value) {
  let result = [value, ...arr];
  return result;
}

console.log(myUnshift([1, 2, 3], 0));
