// YOUR CODE BELOW
function zeroDarkThirty(number) {
    if (number === 0) {
      return NaN;
    }
    
    let numberString = number.toString();
    let resultString = '';
     
    for (let i = 0; i < numberString.length; i++) {
      if (numberString[i] !== '0') {
        resultString += numberString[i];
      }
    }
    let num = Number(resultString)
    return (num);
  }
  
  console.log(zeroDarkThirty(102302)); // Output: 1232
  console.log(zeroDarkThirty(606.203)); // Output: 66.23
  console.log(zeroDarkThirty(0)); // Output: NaN
  