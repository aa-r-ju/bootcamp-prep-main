// YOUR CODE BELOW
function mySplice(arr, start, deleteCount, replaceWith) {
  let removed = [];

  for (let i = 0; i < deleteCount; i++) {
    removed.push(arr[start + i]);
  }

  for (let i = start; i < arr.length - deleteCount; i++) {
    arr[i] = arr[i + deleteCount];
  }

  arr.length = arr.length - deleteCount;

  if (replaceWith !== undefined) {
    for (let i = arr.length; i > start; i--) {
      arr[i] = arr[i - 1];
    }

    arr[start] = replaceWith;
  }

  return removed;
}
let myArray = [1, 2, 3];
console.log(mySplice(myArray, 1, 1, "apples"));
console.log(myArray);
