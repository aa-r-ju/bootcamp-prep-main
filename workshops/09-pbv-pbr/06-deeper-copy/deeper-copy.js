// YOUR CODE BELOW
function deeperCopy(array) {
    var newArray = [];
  
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        newArray[i] = deeperCopy(array[i]);
      } else {
        newArray[i] = array[i];
      }
    }
  
    return newArray;
  }
  
  var myArray = [1, [2, 3]];
  var copy = deeperCopy(myArray);
  copy[1].push(4);
  
  console.log(myArray);
  
  var copy2 = myArray.slice();
  copy2[1].push(4);
  
  console.log(myArray);
  