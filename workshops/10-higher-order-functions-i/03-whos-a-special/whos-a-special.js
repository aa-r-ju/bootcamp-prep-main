// YOUR CODE BELOW
function whosASpecial(petArr) {
  let str = "";

  petArr.forEach(function (pet, i) {
    if (i !== petArr.length - 1) {
      str += `${pet.name} the ${pet.species} is very special! `;
    } else {
      str += `${pet.name} the ${pet.species} is very special!`;
    }
  });

  return str;
}

let specialPets = [
  {
    name: "Sadie",
    species: "cat",
  },
  {
    name: "Layla",
    species: "cat",
  },
  {
    name: "Bogie",
    species: "dog",
  },
];

console.log(whosASpecial(specialPets));
