// YOUR CODE BELOW
function callThemAll(obj, value) {
  let result = [];
  for (let keys in obj) {
    if (typeof obj[keys] === "function") {
      let sum = obj[keys](value);
      result.push(sum);
    }
  }
  return result;
}

let addsNums = {
  addTen: function (num) {
    return num + 10;
  },

  addTwenty: function (num) {
    return num + 20;
  },

  someProperty: "value",
};
console.log(callThemAll(addsNums, 100));
