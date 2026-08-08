// YOUR CODE BELOW

//if we do not know it's structure

function zooInventory(arr) {
  let result = [];
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        if (Array.isArray(arr[i][j])) {
          for (let k = 0; k < arr[i][j].length; k++) {
            if (typeof arr[i][j][k] === "string") {
              str += arr[i][j][k] + " is ";
            } else if (typeof arr[i][j][k] === "number") {
              str += arr[i][j][k] + ".";
            }
          }
        } else {
          str += arr[i][j] + " the ";
        }
      }
    }
    result.push(str);
    str = "";
  }
  return result;
}

//if you know the structure
// function zooInventory(array) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     let name = array[i][0];
//     let type = array[i][1][0];
//     let age = array[i][1][1];

//     let sentance = name + " the " + type + " is " + age + ".";

//     result.push(sentance);
//   }
//   return result;
// }

let myZoo = [
  ["King Kong", ["gorilla", 42]],
  ["Nemo", ["fish", 5]],
  ["Punxsutawney Phil", ["groundhog", 11]],
];
console.log(zooInventory(myZoo));
