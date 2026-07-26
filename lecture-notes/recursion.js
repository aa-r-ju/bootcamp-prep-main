function dirReduc(directionArray) {
  for (let i = 0; i < directionArray.length - 1; i++) {
    for (let j = i + 1; j < directionArray.length; j++) {
      if (
        (directionArray[i] === "NORTH" && directionArray[j] === "SOUTH") ||
        (directionArray[i] === "SOUTH" && directionArray[j] === "NORTH") ||
        (directionArray[i] === "EAST" && directionArray[j] === "WEST") ||
        (directionArray[i] === "WEST" && directionArray[j] === "EAST")
      ) {
        directionArray.splice(j, 1);
        directionArray.splice(i, 1);
        i--;
        console.log(directionArray);
        break;
      }
    }
  }
  return directionArray;
}

function dirReducRecur(directionArray) {
  let reduced = false;
  let ansArray = [];
  loop1: for (let i = 0; i < directionArray.length - 1; i++) {
    loop2: for (let j = i + 1; j < directionArray.length; j++) {
      if (
        (directionArray[i] === "NORTH" && directionArray[j] === "SOUTH") ||
        (directionArray[i] === "SOUTH" && directionArray[j] === "NORTH") ||
        (directionArray[i] === "EAST" && directionArray[j] === "WEST") ||
        (directionArray[i] === "WEST" && directionArray[j] === "EAST")
      ) {
        reduced = true;
        let newDirectionArray = [];
        for (let k = 0; k < directionArray.length; k++) {
          if (k === i || k === j) continue;
          else {
            newDirectionArray.push(directionArray[k]);
          }
        }
        debugger;
        ansArray = dirReducRecur(newDirectionArray);
        break loop1;
      }
    }
  }
  if (!reduced) ansArray = directionArray;
  return ansArray;
}

console.log(
  dirReducRecur([
    "NORTH",
    "SOUTH",
    "SOUTH",
    "EAST",
    "WEST",
    "NORTH",
    "WEST",
    "WEST",
    "NORTH",
    "EAST",
  ])
);

// console.log(dirReducRecur(["WEST", "WEST", "NORTH", "EAST"]));
// console.log(dirReduc(["WEST", "WEST", "NORTH", "EAST"]));
// console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
