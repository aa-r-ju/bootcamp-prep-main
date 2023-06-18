// YOUR CODE BELOW
function rotateArray(originalArray, rotateNum) {
    const rotatedArray = [...originalArray];
    const rotateIndex = rotateNum % originalArray.length;
    if (rotateIndex > 0) {
      const removedElements = rotatedArray.splice(-rotateIndex);
      rotatedArray.unshift(...removedElements);
    }
    else if (rotateIndex < 0) {
      const removedElements = rotatedArray.splice(0, -rotateIndex);
      rotatedArray.push(...removedElements);
    }
  
    return rotatedArray;
  }
  
  console.log(rotateArray([1, 2, 3, 4, 5], 1)); // Output: [5, 1, 2, 3, 4]
  console.log(rotateArray([1, 2, 3, 4, 5], -1)); // Output: [2, 3, 4, 5, 1]
  console.log(rotateArray([1, 2, 3, 4, 5], 0)); // Output: [1, 2, 3, 4, 5]
  