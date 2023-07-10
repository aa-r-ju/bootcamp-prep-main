// YOUR CODE BELOW
function onlyOne(a, b, c) {
 if(!a && !b && c) {
  return true;
 } else if (!a && b && !c) {
  return true;
 } else if(a && !b && !c) {
  return true;
 } else {
  return false;
 }
}

   
console.log(onlyOne(false, false, true))
console.log(onlyOne(0, 1, 2))