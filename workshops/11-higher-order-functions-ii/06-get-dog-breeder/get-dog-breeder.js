// YOUR CODE BELOW
function getDogBreeder(defaultName = "steve", defaultAge = 0) {
  return function dogBreeder(newName, newAge){
    if(!(newName||newAge)){
      return{name:defaultName, age:defaultAge}
    }
    else if(typeof newName==="number"){
      return {name:defaultName,age:newName}
    } else if (!newAge) {
      return { name:newName,age:defaultAge}
    }
    else { return {
      name:newName,age:newAge
    }}
  }

}
//let expectedValue = getDogBreeder("Rufus",10)
let puppyFarm = getDogBreeder("Rufus",10);
// let rescueShelter = getDogBreeder('Odie', 3);
debugger
//console.log(puppyFarm('Olaf', 3)); // => { name: 'Olaf', age: 3 }
console.log(puppyFarm(5)); // => { name: 'Snoopy', age: 2 }

// console.log(rescueShelter()); // => { name: 'Odie', age: 3 }
