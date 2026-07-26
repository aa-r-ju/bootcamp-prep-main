/*
ARRAYS II
- to cover:
  - arrays can contain other arrays (multi dimensional array)
  - looping through two dimensional array -> nested for loop
  
- splice: mutates the array
  - return value
  - in place value
  - insert value
- join
- concat
*/
// let fellows = ["Aarju", "Hemlal", "Sharmila", [1, 4, "Hello"]];
// console.log(fellows);
// console.log(fellows[3]);
// console.log(fellows[3][1]);
// debugger;
// for (let i = 0; i < fellows.length; i++) {
//   let currentValue = fellows[i];
//   if (Array.isArray(currentValue)) {
//     // console.log("this is an array");
//     for (let j = 0; j < currentValue.length; j++) {
//       console.log(fellows[i][j]);
//     }
//   } else {
//     console.log(currentValue);
//   }
// }
let fellows = ["Aarju", "Hemlal", "Sharmila", [1, 4, "Hello"]];
// console.log(fellows);
// let splicedFellow = fellows.splice(3, 0, "Aarju");
// console.log(fellows.splice(2, 1))
// console.log(fellows);
// console.log(splicedFellow);
// let joinedFellows = fellows.join("$");
// console.log(fellows);
// console.log(joinedFellows);
let moreFellows = fellows.concat(["Lishu", "Liza"]);
console.log(fellows);
console.log(moreFellows);
