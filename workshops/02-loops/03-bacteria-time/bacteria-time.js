// YOUR CODE BELOW
function bacteriaTime(currentNum, targetNum) {
  let time = 0;

  if (targetNum < currentNum) {
    return "targetNum must be larger than currentNum";
  }
  for (let i = currentNum; i < targetNum; i *= 2) {
    time += 20;
  }

  return time;
}
console.log(bacteriaTime(1, 8));
console.log(bacteriaTime(8, 5));
