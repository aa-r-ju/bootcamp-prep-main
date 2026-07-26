/*
OBJECTS:
- look at existing methods on objects we have used before
  - e.g. array.push
- write your own simple method
- write your own method with parameter
  - parameter is a function
- write your own method with this
*/
// let someObj = {
//   fName: "Sharmila",
//   address: "Kapan",
//   display: function (greeting) {
//     console.log(greeting, this.fName);
//   },
// };
// // let nameInsideObj = someObj.fName;
// // console.log(nameInsideObj);
// let funcInsideObj = someObj.display;
// // someObj.display("Fellowship 2023");
// funcInsideObj("Fellowship 2023");

function takeFunction(oneFunc) {
  oneFunc();
}
let oneFunc = function () {
  console.log("Hello world");
};
debugger;
takeFunction(oneFunc);
