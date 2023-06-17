// YOUR CODE BELOW
function chainReaction(startingValue, functions) {
    let result = startingValue;
    
    for (let i = 0; i < functions.length; i++) {
      result = functions[i](result);
    }
    
    return result;
  }
  

  function addTen(num) {
    return num + 10;
  }
  
  function subtractFive(num) {
    return num - 5;
  }
  
  function multiplyFive(num) {
    return num * 5;
  }
  
  console.log(chainReaction(0, [addTen, subtractFive, multiplyFive])); 
  console.log(chainReaction(0, [subtractFive, multiplyFive, addTen])); 