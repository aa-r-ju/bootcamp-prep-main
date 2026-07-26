// /*
// OBJECTS: Key Value pairs
// - similarity to array
// - dissimilarity to array

// - creating
// - typeof
// - doing stuff with objects
//   - accessing
//     - [] <- can pass any expression that evaluates to string / key
//     - . notation <- does not need quotations, so cannot pass variable
//     - nested arrays / objects
//       - accessing nested objects
//   - changing
//   - adding
//   - deleting
//   - finding 'key' in objects

// - looping through object
//   - for in
//   - object.keys
// */
// let fellows1 = {
//   name: "Aarju",
//   age: 22,
//   isMarried: false,
//   address: {
//     street: "123 Kerabari",
//     city: "Morang",
//     country: "Nepal",
//   },
// };
// let name = "age";
// // console.log(fellows1.name);
// // console.log(fellows1.address.street);
// fellows1.address.street = "Sanepa";
// // console.log(fellows1.address.street);
// // console.log(fellows1);
// delete fellows1.address.street;
// // console.log(fellows1);
// // console.log("fellowshipYear" in fellows1);

// fellows1.fellowshipYear = 2023;
// // console.log(typeof fellows1);
// // console.log("fellowshipYear" in fellows1);

// for (i in fellows1) {
//   console.log(i, "key has", fellows1[i]);
// }

// // console.log(Object.keys(fellows1));
// let myKeys = Object.keys(fellows1);

// console.log(myKeys);

// for (let i = 0; i < myKeys.length; i++) {
//   console.log(myKeys[i]);
// }

let pusheen = {
  name: "Pusheen",
  age: 7,
  color: "gray and tabby",
  // j: "this is j",
};
let j = "age";
console.log(pusheen.j);
console.log(pusheen[j]);
// let keysInObj = Object.keys(pusheen);

// for (i in pusheen) {
//   console.log("Pusheen's", i, pusheen[i]);
// }
