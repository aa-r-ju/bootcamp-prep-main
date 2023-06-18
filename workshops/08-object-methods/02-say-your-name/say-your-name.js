// YOUR CODE BELOW
// let me2 = {
//     name: "Tarana",
//     getGreeting: function (friend) {
//       return "Hi " + friend.name + ", my name is " + this.name + ".";
//     },
//   };
//   me2.getGreeting("Jeff");
  
// const me2 = {
//   name: 'Tarana',
//   getGreeting: function(other) {
//     return `Hi ${other.name}, my name is ${this.name}.`;
//   }
// };

// const you = {
//   name: 'Alyssa'
// };

// console.log(me2.name); // 'Tarana'
// console.log(you.name); // 'Alyssa'
// console.log(me2.getGreeting(you)); // 'Hi Alyssa, my name is Tarana.'


let me2 = {
  name: 'sultan',
  myGreeting: function (friend) {
      return `Hi ${friend.name}, my name is ${this.name}.`
  },
}
let friend = {
  name: 'Ravi',
}