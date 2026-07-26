// code executes line by line
// the keyword 'function' behaves differently from this rule
//      just like the keyword 'if' had behaved differently
// parts of a function
// calling function
// function with multiple parameters
// return
// return vs console.log
// function as argument to another function
// function as expression in if condition

// function has 3 parts
// 1. input (argument, parameter)
// 2. code that runs
// 3. return value
let message = "hello Raju";
function sayHello(currMessage) {
  console.log(currMessage);
  console.log(currMessage);
  console.log(currMessage);
  return "manzila";
}
let yourReturn = sayHello(message);
console.log(yourReturn);

let price = 200;
let discount = 10;

function calculateDiscount(itemPrice, itemDisc) {
  let newPrice = itemPrice - itemPrice * (itemDisc / 100);
  return newPrice;
}

// let myPrice = calculateDiscount(price, discount);

console.log(calculateDiscount(price, discount));
