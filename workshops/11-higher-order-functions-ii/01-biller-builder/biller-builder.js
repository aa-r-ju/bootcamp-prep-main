// YOUR CODE BELOW
function billerBuilder(state) {
  return function (price) {
    let total = 0;
    if (state === "NY") {
      total = price * 1.03 * 1.04;
    } else if (state === "NJ") {
      total = price * 1.05 * 1.06625;
    }
    return total;
  };
}
let newYorkBiller = billerBuilder("NY");
console.log(newYorkBiller(100));
let newJersBiller = billerBuilder("NJ");
console.log(newJersBiller(100));
