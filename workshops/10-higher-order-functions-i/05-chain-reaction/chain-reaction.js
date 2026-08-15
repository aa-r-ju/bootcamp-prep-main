// YOUR CODE BELOW
function chainReaction(num, arr) {
  let result = num;

  for (let i = 0; i < arr.length; i++) {
    result = arr[i](result);
  }
  return result;
}

function addTen(num) {
  return num + 10;
}

function subtractFive(num) {
  return num - 5;
}

function multiplyFive(num) {
  return num * 5;
}

console.log(chainReaction(0, [addTen, subtractFive, multiplyFive]));
console.log(chainReaction(0, [subtractFive, multiplyFive, addTen]));
