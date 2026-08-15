// YOUR CODE BELOW
function cloneMachine(obj) {
  let newObj = {};
  for (let keys in obj) {
    if (keys === "name") {
      newObj[keys] = obj[keys] + "Clone";
    } else if (keys === "offspring") {
      newObj[keys] = [];
      obj[keys].push(newObj.name);
    } else {
      newObj[keys] = obj[keys];
    }
  }
  return newObj;
}

let dolly = {
  name: "Dolly",
  species: "sheep",
  offspring: [],
};

let dollyClone = cloneMachine(dolly);
console.log(dollyClone);
console.log(dolly);
