// YOUR CODE BELOW
function searchParty(name, world) {
  for (let key in world) {
    let value = world[key];

    if (value === name) {
      return [key];
    }

    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        if (value[i] === name) {
          return [key];
        }
      }
    }

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      let result = searchParty(name, value);

      if (result !== null) {
        return [key].concat(result);
      }
    }
  }

  return null;
}

let world = {
  Fullstack: {
    "11th floor": "Marge",
    "25th floor": "Francis",
  },
  Subway: ["Jackie", "Grumio"],
};
