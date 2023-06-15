// YOUR CODE BELOW
function oddCouple(numbers) {
    let oddNumbers = [];
    let count = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 !== 0) {
        oddNumbers.push(numbers[i]);
        count++;
  
        if (count === 2) {
          break;
        }
      }
    }
  
    return oddNumbers;
  }
  
  console.log(oddCouple([1, 2, 3, 4, 5]));
  console.log(oddCouple([10, 15, 20]));
  console.log(oddCouple(2, 4, 6, 8));
  