// function myMnemonic(a, b, c, d) {
//   let name = "";
//   // name = name + a[0] + b[0] + c[0] + d[0];
//   //return name;
//   if (a !== undefined) {
//     name = name + a[0];
//   }
//   if (b !== undefined) {
//     name = name + b[0];
//   }
//   if (c !== undefined) {
//     name = name + c[0];
//   }
//   if (d !== undefined) {
//     name = name + d[0];
//   }
//   console.log(myMnemonic);
//   return name;
// }

// console.log(myMnemonic("Must", "Accept", "Sugar", "Happiness")); // => MASH
// console.log(myMnemonic("We", "Eat", "Eggs"));


function myMnemonic (a,b,c,d) {
 let name =  "";
 if ( a !== undefined) {
  name = name + a[0];
 } if (b !== undefined) {
  name = name +b[0];
 } if (c !== undefined) {
  name = name + c[0];
 } if ( d !== undefined) {
  name = name + d[0]
 } 
 console.log(myMnemonic);
 return name;
}

console.log(myMnemonic('Must', 'Accept', 'Sugar', 'Happiness')); 

