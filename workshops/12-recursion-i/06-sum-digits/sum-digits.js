// YOUR CODE BELOW
function sumDigits(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  let num = String(numbers);
  return Number(num[num.length - 1]) + sumDigits(num.slice(0, -1));
}

console.log(sumDigits(1234));
