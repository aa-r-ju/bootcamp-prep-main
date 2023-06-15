// YOUR CODE BELOW// YOUR CODE BELOW
function callThemAll(object, value) {
    debugger;
    let val = [];
    for (let key in object) {
      //console.log(key);
      // console.log(object[key]);
      //console.log(typeof object[key]);
      if (typeof object[key] === "function") val.push(object[key](value));
    }
    return val;
  }
  
  // let obj = {
  //   addTen: function (num) {
  //     return num + 10;
  //   },
  
  //   addTwenty: function (num) {
  //     return num + 20;
  //   },
  
  //   someProperty: "value",
  // };
  
  console.log(callThemAll(obj, 100)); // => [110, 120]
  
