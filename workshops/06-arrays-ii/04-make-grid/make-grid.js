// YOUR CODE BELOW
function makeGrid(numColumns, numRows) {
  let result = [];
  for (let i = 1; i <= numRows; i++) {
    let arr = [];
    for (let j = 1; j <= numColumns; j++) {
      arr.push(j);
    }
    result.push(arr);
  }
  return result;
}
console.log(makeGrid(3, 4));
