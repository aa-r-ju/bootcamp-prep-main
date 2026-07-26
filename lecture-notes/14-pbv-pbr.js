/*
Overview:
  - Primitive vs. complex values
  - Variable assignment
  - Passing values into functions
  - Equality operators and PBV/PBR
  - Arrays and .slice


Details:
    Primitive
    - declaring primitives
    - assigning one primitive var to another
    - equality for primitive
        - assigned
        - separately declared
    - operating on primitive
    - passing primitives into function

    Complex
    - declaring collection / complex
    - assigning one collection to another
    - equality for collection
        - assigned
        - separately declared
    - operating on complex
    - passing collections into function
*/
// let primitiveA = "Hello world";
// let copyOfA = primitiveA;
// console.log(primitiveA === copyOfA);

// primitiveA = "Bye world";
// console.log(primitiveA === copyOfA);

// let primitiveC = "Bye world";
// console.log(primitiveA === primitiveC);

// let complexA = [1, 2, 3];
// let copyOfComplexA = complexA;
// console.log(complexA === copyOfComplexA);

// complexA.push(4); //complexA is now [1, 2, 3, 4]
// console.log(complexA === copyOfComplexA);

// let complexB = [1, 2, 3, 4];
// console.log(complexA == complexB);

// let sliceA = complexA.slice();
// console.log(complexA === sliceA);

// complexA.push([5, 6]); //[1, 2, 3, 4, [5,6]]
// let newSliceA = complexA.slice();
// console.log(complexA === newSliceA);
// console.log(complexA[4] === newSliceA[4]);
debugger;
function doSomething(parA) {
  if (Array.isArray(parA)) {
    parA.push("Hello from function to array");
  } else if (typeof parA === "Object") {
    parA.hello = "Hello from function to object";
  } else {
    //the data is primitive
    parA = "Hello from function to primitive data";
  }
  return parA;
}

let someVal = "current value";
console.log(someVal === doSomething(someVal));

let someArray = [1, 2, 3];
console.log(someArray === doSomething(someArray));
