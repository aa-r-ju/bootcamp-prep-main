// YOUR CODE BELOW
function bacteriaTime(currentNum, targetNum) {
    if (targetNum < currentNum) {
      return 'targetNum must be larger than currentNum';
    }
  
    let minutes = 0;
    let numBacteria = currentNum;
  
    while (numBacteria < targetNum) {
      numBacteria *= 2;
      minutes += 20;
    }
  
    return minutes;
  }
  
  console.log(bacteriaTime(1, 8)); // Output: 60