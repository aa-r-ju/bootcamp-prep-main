// YOUR CODE BELOW
// function dogBreeder(name, age = 0) {
//   debugger;
//   let dog = {};

//   if (typeof name === "string") {
//     dog.name = name;
//   } else {
//     dog.name = "Steve";
//   }
//   if (typeof age === "number") {
//     dog.age = age;
//   } else {
//     dog.age = 0;
//   }
//   return dog;
// }
// console.log(dogBreeder("Snoopy"));
// console.log(dogBreeder(3));

function dogBreeder(name, age = 0) {
    debugger;
    let dog = {};
    if (typeof name === "number") {
      dog.name = "Steve";
      dog.age = name;
    } else {
      dog.name = name || "Steve";
  
      dog.age = age || 0;
    }
    return dog;
  }
  
  //console.log(dogBreeder("Snoopy"));
  console.log(dogBreeder(3));
  