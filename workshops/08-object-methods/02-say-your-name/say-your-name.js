// YOUR CODE BELOW
let me2 = {
  name: "Tarana",
  getGreeting: function (para) {
    return `Hi ${para.name}, my name is ${this.name}.`;
  },
};
let you = {
  name: "Alyssa",
};
console.log(me2.name);
console.log(you.name);
console.log(me2.getGreeting(you));
