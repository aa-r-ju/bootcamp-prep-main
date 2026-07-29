// YOUR CODE BELOW
function exponentiate(base, power) {
  let total = 1;

  for (let i = 0; i < power; i++) {
    total *= base;
  }
  return total;
}
console.log(exponentiate(2, 2));
console.log(exponentiate(3, 4));
console.log(exponentiate(3, 0));
