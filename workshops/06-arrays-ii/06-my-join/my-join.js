// YOUR CODE BELOW
function myJoin(array, separator = ",") {
  let str = "";
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    if (value === undefined || value === null) {
      value = "";
    }
    str += value;

    if (i !== array.length - 1) {
      str += separator;
    }
  }
  return str;
}
console.log(myJoin(["let's", "make", "a", "list"], " "));
console.log(myJoin(["a", "b", "c"], "+"));
console.log(myJoin(["Peter", "Paul", "Mary"]));
console.log(myJoin(["hello", undefined, "world"], "-"));
