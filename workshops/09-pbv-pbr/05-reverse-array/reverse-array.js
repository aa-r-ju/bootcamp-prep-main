// YOUR CODE BELOW
function reverse(array) {
    var leftIndex = 0;
    var rightIndex = array.length - 1;
  
    while (leftIndex < rightIndex) {
      // Swap elements at leftIndex and rightIndex
      var temp = array[leftIndex];
      array[leftIndex] = array[rightIndex];
      array[rightIndex] = temp;
  
      // Move the indices towards the center
      leftIndex++;
      rightIndex--;
    }
  }
  
  var myArray = [1, 2, 3, 4];
  reverse(myArray);
  console.log(myArray); // [4, 3, 2, 1]
  