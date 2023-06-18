// YOUR CODE BELOW
// function unShift(arr, value) {
//     // Create a new array starting with the given value
//     const newArray = [value];
//     // Copy the elements from the original array to the new array
//     for (let i = 0; i < arr.length; i++) {
//       newArray.push(arr[i]);
//     }
//     return newArray;
//   }
//   console.log(unShift([1, 2, 3], 0)); // Output: [0, 1, 2, 3]
function unShift(arr, value) {
  const newArray = [value]; // Create a new array with the given value

  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i]); // Copy the elements from the original array to the new array
  }

  return newArray;
}
console.log(unShift([1, 2, 3], 0)); // Output: [0, 1, 2, 3]
