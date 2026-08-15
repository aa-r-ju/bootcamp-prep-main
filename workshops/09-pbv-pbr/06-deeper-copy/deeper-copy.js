// YOUR CODE BELOW
function deeperCopy(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let innerArr = [];
      for (let j = 0; j < arr[i].length; j++) {
        innerArr.push(arr[i][j]);
      }
      newArr.push(innerArr);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
// let myArray = [1, [2, 3]];
// let copy = deeperCopy(myArray);
// copy[1].push(4);
// console.log(myArray);
// let copy2 = myArray.slice();
// copy2[1].push(4);
// console.log(myArray); // [1, [2, 3, 4]]
