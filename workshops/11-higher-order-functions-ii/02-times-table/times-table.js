// YOUR CODE BELOW
function timesTable(num) {
  return function (digit) {
    return num * digit;
  };
}
let ninesTable = timesTable(9);
console.log(ninesTable(8));

let twelvesTable = timesTable(12);
console.log(twelvesTable(100));
