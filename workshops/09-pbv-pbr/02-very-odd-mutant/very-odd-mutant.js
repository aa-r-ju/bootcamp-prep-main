function veryOddMutant(numbers) {
    let countRemoved = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        numbers[i] = 'normie';
        countRemoved++;
      }
    }
    return countRemoved;
  }
  
  let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
  let countRemoved = veryOddMutant(allTheNums);
  
  console.log('allTheNums:', allTheNums);
  // Output: [1, 'normie', 3, 'normie', 5, 'normie', 7, 'normie']
  
  console.log('countRemoved:', countRemoved);
  // Output: 4