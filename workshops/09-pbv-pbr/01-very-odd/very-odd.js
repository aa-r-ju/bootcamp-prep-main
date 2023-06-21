function veryOdd(numbers) {
    const oddNumbers = numbers.filter(num => num % 2 !== 0);
    return oddNumbers;
  }
  
  let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
  let oddNums = veryOdd(allTheNums);
  
  console.log('oddNums:', oddNums); 
  console.log('allTheNums:', allTheNums); 
     