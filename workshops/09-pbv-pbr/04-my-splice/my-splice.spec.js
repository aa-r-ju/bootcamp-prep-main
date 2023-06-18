function mySplice(array, start, deleteCount, newItem) {
  // Create a new array to hold the removed elements
  const removedItems = [];

  // Copy the original array
  const newArray = array.slice();

  // Check if start index is out of bounds
  if (start < 0) {
    start = Math.max(newArray.length + start, 0);
  } else {
    start = Math.min(start, newArray.length);
  }

  // Remove elements from the start index
  for (let i = 0; i < deleteCount; i++) {
    if (start + i < newArray.length) {
      removedItems.push(newArray[start + i]);
      newArray[start + i] = undefined;
    }
  }

  // Shift the elements to fill the gaps left by removed elements
  let newIndex = start;
  for (let i = start + deleteCount; i < newArray.length; i++) {
    newArray[newIndex++] = newArray[i];
  }

  // Remove the remaining elements
  newArray.length = Math.max(newArray.length - deleteCount, 0);

  // Insert new item at the start index
  newArray.splice(start, 0, newItem);

  // Return the removed elements
  return removedItems;
}

let myArray = [1, 2, 3];

console.log(mySplice(myArray, 1, 1, 'apples')); // Output: [2]
console.log(myArray); // Output: [1, 'apples', 3]
