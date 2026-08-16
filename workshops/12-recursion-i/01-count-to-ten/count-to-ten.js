// YOUR CODE BELOW
function countToTen(num) {
  if (num > 10) {
    return;
  }
  console.log(num);
  countToTen(num + 1);
}
countToTen(5);
