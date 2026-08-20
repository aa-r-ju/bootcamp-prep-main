// YOUR CODE BELOW
function getLongestName(obj) {
  if (obj === null) {
    return "";
  }

  let longestName = "";

  let names = Object.keys(obj);

  for (let i = 0; i < names.length; i++) {
    let name = names[i];

    if (name.length > longestName.length) {
      longestName = name;
    }

    let childResult = getLongestName(obj[name]);

    if (childResult.length > longestName.length) {
      longestName = childResult;
    }
  }

  return longestName;
}
