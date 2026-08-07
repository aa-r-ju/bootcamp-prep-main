// YOUR CODE BELOW
function oddCouple(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      newArr.push(arr[i]);
      if (newArr.length === 2) {
        break;
      }
    }
  }
  return newArr;
}
console.log(oddCouple(oddCouple([1, 2, 3, 4, 5])));
console.log(oddCouple([10, 15, 20]));
console.log(oddCouple(2, 4, 6, 8));
