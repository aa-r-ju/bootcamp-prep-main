function myUnshift(orgArr, unshiftVal) {
  let newArr = [];
  newArr.push(unshiftVal);
  for (let i = 0; i < orgArr.length; i++) {
    newArr.push(orgArr[i]);
  }
  return newArr;
}

//console.log(myUnshift(["bears", "cows", "ducks"], "hello"));