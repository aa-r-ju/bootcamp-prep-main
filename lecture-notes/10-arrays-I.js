/*
ARRAYS I
- what's an array?
- bracket access, bracket assignment
- .length property

- typeof []
- Array.isArray

- basic methods: method so (), not []
  - push / pop
  - shift / unshift
  - reverse: mutates the string
  - similar to string
    - indexOf
    - includes
    - slice
      - slice(1,2), slice(1), slice(): copy
*/
let name1 = "Hem";
// let name2 = name1;
name1 = "Lishu";
// console.log("name1", name1);
// console.log("name2", name2);

let names = ["Hem", "Sunil", name1, 1000];
// console.log(names);
// let names2 = names;
// names[2] = "Sushil";

// console.log(names[2]);
// console.log(names2[2]);

// console.log(typeof names);
// console.log(Array.isArray(names));
// console.log(names.length);
//how to add value to end of array
let whatIsThis = names.push("Sharmila");
let mySlice = names.slice(1, 4, "2");
mySlice[0] = "Prabesh";
console.log(names);
console.log(mySlice);
//["Hem", "Sunil", name1, 1000,"Sharmila"]
// console.log(names.indexOf(1000));
// console.log(names.includes(1000));

// console.log(names);
// console.log(whatIsThis);
// let afterPop = names.pop();
// console.log(names);
// console.log(afterPop);
// console.log(names.reverse());
// console.log(names);
