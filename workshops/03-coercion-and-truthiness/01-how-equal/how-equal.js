// YOUR CODE BELOW
function howEqual(para1, para2) {
  if (para1 === para2) {
    return "strictly";
  } else if (para1 == para2) {
    return "loosely";
  } else {
    return "not equal";
  }
}
console.log(howEqual(0, "0"));
console.log(howEqual(3, 9 / 3));
console.log(howEqual(true, "truthy"));
