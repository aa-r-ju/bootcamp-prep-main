// YOUR CODE BELOW
function onlyOne(...args) {
  let trueVal = 0;

  for (let i = 0; i < args.length; i++) {
    if (args[i]) {
      trueVal++;
    }
  }
  return trueVal > 0 && trueVal < 2;
}
console.log(onlyOne(false, false, true));
console.log(onlyOne(0, 1, 2));
console.log(onlyOne(false, "", 0));
