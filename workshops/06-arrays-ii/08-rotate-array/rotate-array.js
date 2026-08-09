// YOUR CODE BELOW
function rotateArray(originalArray, rotateNum) {
  let result = [];

  if (rotateNum > 0) {
    for (
      let i = originalArray.length - rotateNum;
      i < originalArray.length;
      i++
    ) {
      result.push(originalArray[i]);
    }

    for (let j = 0; j < originalArray.length - rotateNum; j++) {
      result.push(originalArray[j]);
    }
  } else if (rotateNum < 0) {
    for (let k = -rotateNum; k < originalArray.length; k++) {
      result.push(originalArray[k]);
    }

    for (let n = 0; n < -rotateNum; n++) {
      result.push(originalArray[n]);
    }
  } else if (rotateNum === 0) {
    for (let o = 0; o < originalArray.length; o++) {
      result.push(originalArray[o]);
    }
  }
  return result;
}
console.log(rotateArray([1, 2, 3, 4, 5], 1));
console.log(rotateArray([1, 2, 3, 4, 5], -2));
console.log(rotateArray([1, 2, 3, 4, 5], 0));
