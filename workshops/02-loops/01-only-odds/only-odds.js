// YOUR CODE BELOW
function onlyOdds(num) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(onlyOdds(6));
console.log(onlyOdds(10));
