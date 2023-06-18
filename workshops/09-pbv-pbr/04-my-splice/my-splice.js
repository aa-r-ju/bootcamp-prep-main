function mySplice(array, start, deleteCount, newItem) {
    const removedItems = [];
    const newArray = array.slice();
    if (start < 0) {
      start = Math.max(newArray.length + start, 0);
    } else {
      start = Math.min(start, newArray.length);
    }
    for (let i = 0; i < deleteCount; i++) {
      if (start + i < newArray.length) {
        removedItems.push(newArray[start + i]);
        newArray[start + i] = undefined;
      }
    }
    let newIndex = start;
    for (let i = start + deleteCount; i < newArray.length; i++) {
      newArray[newIndex++] = newArray[i];
    }
    newArray.length = Math.max(newArray.length - deleteCount, 0);
    newArray.splice(start, 0, newItem);
    for (let i = 0; i < newArray.length; i++) {
      array[i] = newArray[i];
    }
    return removedItems;
  }
  
  let myArray = [1, 2, 3];
  
  console.log(mySplice(myArray, 1, 1, 'apples')); 
  console.log(myArray);