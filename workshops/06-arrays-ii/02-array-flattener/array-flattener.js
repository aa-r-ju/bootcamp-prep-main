// YOUR CODE BELOW
// YOUR CODE BELOW
// function arrayFlattener(array) {
//   let arrayFlattener = [];

//   function flatten(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         flatten(arr[i]);
//       } else {
//         flattenedArray.push(arr[i]);
//       }
//     }
//   }
//   flatten(array);
//   return flattenedArray;
// }

//console.log(arrayFlattener([1, [2, 3], 4]));

// arrayFlattener([1,[2, 3], 4])

function arrayFlattener(array) {
    let flattenedArray = [];
  
    function flatten(arr) {
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          flatten(arr[i]);
        } else {
          flattenedArray.push(arr[i]);
        }
      }
    }
  
    flatten(array);
    return flattenedArray;
  }
  