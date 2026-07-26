/*
- Explicit coercion
- Implicit coercion
  - Concatenation
  - Loose-equality operator (==)
- Coercion to boolean (truthiness)
  - Which values are truthy/falsey
  - conditional expressions
     - ! operator
  - logical operators
*/
// let explicitString = String(20);
// let implicitString = 20 + 20 + "20";
// console.log("price is", implicitString);
// console.log("datatype is", typeof implicitString);

// console.log(10 === 10);
// console.log("10" === 10);
// console.log("10" == 10);
// console.log(true == "true"); //1 === NaN

// if (!!"") {
//   console.log("this statement is true");
// } else {
//   console.log("this statement is false");
// }
let val = "" || "0" || false || NaN;
console.log(val);
