// YOUR CODE BELOW
function compareObjects(obj1, obj2) {
  let first = Object.keys(obj1);
  let second = Object.keys(obj2);

  if (first.length !== second.length) {
    return false;
  }

  for (let i = 0; i < first.length; i++) {
    let key = first[i];

    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}
console.log(compareObjects({ name: "nick" }, { name: "nick" }));
console.log(compareObjects({ name: "zeke" }, { name: "zeke", age: 12 }));
