// YOUR CODE BELOW
function getDogBreeder(defaultName, defaultAge) {
  return function dogBreeder(name = defaultName, age = defaultAge) {
    if (typeof name === "number") {
      age = name;
      name = defaultName;
    }

    return {
      name: name,
      age: age,
    };
  };
}

let puppyFarm = getDogBreeder("Snoopy", 0);
let rescueShelter = getDogBreeder("Odie", 3);

console.log(puppyFarm("Olaf", 3));
console.log(puppyFarm(2));

console.log(rescueShelter());
