// YOUR CODE BELOW
function removeColumns(originalGrid, numColums) {
  let result = [];
  for (let i = 0; i < originalGrid.length; i++) {
    let arr = [];
    for (let j = 0; j < originalGrid[i].length - numColums; j++) {
      arr.push(originalGrid[i][j]);
    }
    result.push(arr);
  }
  return result;
}

console.log(
  removeColumns(
    [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ],
    2,
  ),
);
