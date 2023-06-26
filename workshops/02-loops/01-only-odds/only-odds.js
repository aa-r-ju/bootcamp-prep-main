function onlyOdds(number) {
  if(number < 1) {
    return 0;
  } else{
  let remainder = 0;
  for(let i = 1; i<=number; i++) {
    if(i %2 !== 0 ) {
      remainder+=i
    }
  }
return remainder
  }
  }
debugger
console.log(onlyOdds(6)); // Output: 9