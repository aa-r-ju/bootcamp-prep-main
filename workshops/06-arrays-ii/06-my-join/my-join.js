// YOUR CODE BELOW
function myJoin(array, separator = ',') {
  let joinedString = '';

  for (let i = 0; i < array.length; i++) {
    if (i > 0) {
      joinedString += separator;
    }

    if (array[i] !== undefined && array[i] !== null) {
      joinedString += array[i];
    }
  }

  return joinedString;
}

console.log(myJoin(["let's", "make", "a", "list"], ' ')); // Output: "let's make a list"
console.log(myJoin(["a", "b", "c"], '+')); // Output: "a+b+c"
console.log(myJoin(["Peter", "Paul", "Mary"])); // Output: "Peter,Paul,Mary"
console.log(myJoin(["hello", undefined, "world"], '-')); // Output: "hello--world"
