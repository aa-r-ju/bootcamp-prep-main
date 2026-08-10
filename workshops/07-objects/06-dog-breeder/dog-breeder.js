// YOUR CODE BELOW
function dogBreeder(name, age) {
  if (typeof name === "number") {
    age = name;
    name = "Steve";
  }
  if (name === undefined) {
    name = "Steve";
  }

  if (age === undefined) {
    age = 0;
  }
  return { name, age };
}
console.log(dogBreeder("sam", 12));
console.log(dogBreeder(15));
console.log(dogBreeder("kiku"));
console.log(dogBreeder(undefined, 15));
