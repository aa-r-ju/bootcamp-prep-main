/*
- Function returning function
    - Number of times function called counter
    - Multiplication builder
*/
function funcReturner() {
  fName = "Aarju";
  let counter = 0;
  let someFunc = function () {
    counter++;
    console.log("hello world", counter);
  };
  return someFunc;
}

let myFunc = funcReturner();

myFunc();
myFunc();
