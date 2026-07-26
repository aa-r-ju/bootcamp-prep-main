/*
- What is scope?
- Types of scope
  - Global
  - Functional (local)
  - Block
- Scope best practices
*/
let hello = "this is hello";
console.log("10: print the variable hello before function", hello);

function printHello(hello) {
  // let hello = "new value for hello";
  // let inHello = "this is local inHello";
  if (true) {
    let hello = "inside if block";
    var blockHello = "this is blockhello";
    console.log("print the variable hello inside block", hello);
    console.log("19: print the variable blockHello inside block", blockHello);
  }
  console.log("print the variable hello inside function", hello);
  console.log("22: print the variable blockHello outside block", blockHello);

  // console.log("print the variable inHello inside function", inHello);
}
printHello();
console.log("print the variable hello after function", hello);
console.log("28: print the variable blockHello outside block", blockHello);

// console.log("print the variable inHello outside function", inHello);
