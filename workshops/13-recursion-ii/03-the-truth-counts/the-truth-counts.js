// YOUR CODE BELOW
function theTruthCounts(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let val = arr[arr.length - 1];
  if (Array.isArray(val)) {
    return theTruthCounts(val) + theTruthCounts(arr.slice(0, -1));
  } else {
    if (val) {
      return 1 + theTruthCounts(arr.slice(0, -1));
    } else {
      return theTruthCounts(arr.slice(0, -1));
    }
  }
}
console.log(theTruthCounts([0, [true, ["yes"]]]));
