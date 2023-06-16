function functionLogger(func, arg) {
    console.log("Function starting");
    let  result = func(arg);
    console.log("Function complete");
    return result;
  }
  
  function squareNum(num) {
    return num * num;
  }
  
  let squareOfFour = functionLogger(squareNum, 4);
  console.log(squareOfFour); // Output: 16