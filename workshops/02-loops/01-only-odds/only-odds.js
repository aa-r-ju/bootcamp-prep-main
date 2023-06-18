function onlyOdds(number) {
  if (number < 1) {
    return 0;
  }

  let sum = 0;
  for (let i = number; i >= 1; i--) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(onlyOdds(6)); // Output: 9