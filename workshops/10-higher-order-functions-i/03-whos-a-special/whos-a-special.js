// YOUR CODE BELOW

function whosASpecial (array) {
    let arr=[]
    array.forEach(function(para){
        let name=para.name
        let species=para.species
        let stringName=name+" the "+species+" is very special!"
        arr.push(stringName)
        
    })
    let finalString=arr.join(" ")
console.log(finalString)
 return finalString
}



   

let specialPets = [{
    name: 'Sadie',
    species: 'cat'
  }, {
    name: 'Layla',
    species: 'cat'
  }, {
    name: 'Bogie',
    species: 'dog'
  }
];
whosASpecial(specialPets)
