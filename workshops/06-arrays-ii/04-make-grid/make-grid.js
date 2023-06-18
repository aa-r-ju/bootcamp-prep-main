// YOUR CODE BELOW
// YOUR CODE BELOW
// function makeGrid(numColumns, numRows) {
//   let grid = [];
//   for (let row = 0; row < numRows; row++) {
//     let rowArray = [];
//     for (let = col; col < numRows; col++) {
//       rowArray.push(0);
//     }
//     grid.push(rowArray);
//   }

//   return grid;
// }
// console.log(makeGrid(3, 4));

// function makeGrid(numColumns, numRows) {
//   let grid = [];
//   for (let row = 0; row < numRows; row++) {
//     let rowArray = [];
//     for (let col = 0; col < numColumns; col++) {
//       rowArray.push(0);
//     }
//     grid.push(rowArray);
//   }
//   return grid;
// }
// let returnedValue = makeGrid(2, 2);
// //let expectedValue = [
// //[3, 4],
// //[3, 4],
// //];

// console.log(returnedValue);
// let cat = {
//     name: "Pusheen",
//     age: 7,
//     color: "gray and tabby",
//   };
//   let keyToCheck = "name";
//   console.log(cat.name);
//   console.log();
  

function makeGrid(numColumns, numRows) {
  let grid = [];

  for (let i = 0; i < numRows; i++) {
    let row = [];

    for (let j = 1; j <= numColumns; j++) {
      row.push(j);
    }

    grid.push(row);
  }

  return grid;
}

console.log(makeGrid(3, 4));
/* Output:
[
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3]
]
*/