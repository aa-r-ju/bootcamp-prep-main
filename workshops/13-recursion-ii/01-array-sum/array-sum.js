// YOUR CODE BELOW
function arraySum(arr) {
  if (arr.length === 0) {
    return 0;
  }

  if (typeof arr[0] === "number") {
    return arr[0] + arraySum(arr.slice(1));
  } else {
    return arraySum(arr[0]) + arraySum(arr.slice(1));
  }
}
console.log(arraySum([1, [2, 3, [4]]]));
