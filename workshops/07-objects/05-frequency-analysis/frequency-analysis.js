// YOUR CODE BELOW
// YOUR CODE BELOW
function frequencyAnalysis(str) {
    let frequency = {};
    for (let i = 0; i < str.length; i++) {
      let letter = str[i];
      //if (str === letter ) {
      if (frequency[letter]) {
        frequency[letter] += 1;
      } else {
        frequency[letter] = 1;
      }
    }
    return frequency;
  }
  
  console.log(frequencyAnalysis("abcabbb"));
  
  // function frequencyAnalysis(str) {
  //   let frequency = {};
  
  //   for (let i = 0; i < str.length; i++) {
  //     let letter = str[i];
  
  //     if (frequency[letter]) {
  //       frequency[letter] += 1;
  //     } else {
  //       frequency[letter] = 1;
  //     }
  //   }
  
  //   return frequency;
  // }
  // console.log(frequencyAnalysis("abca"));
  