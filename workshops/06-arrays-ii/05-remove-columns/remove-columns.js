// YOUR CODE BELOW
function removeColumns(originalGrid, numColumns) {
    let newGrid = [];
  
    for (let row of originalGrid) {
      let newRow = row.slice(0, row.length - numColumns);
      newGrid.push(newRow);
    }
  
    return newGrid;
  }
  
  console.log(removeColumns([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]], 2));
  /* Output:
  [
    [1],
    [1],
    [1],
    [1]
  ]
  */