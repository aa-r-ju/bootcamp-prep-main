// Edit the code below
// let place = 'Planet Earth';

// function fullstackHQ(){
//   return middleFunction('United States');

//   function middleFunction(place) {
//     return innerFunction('New York State');

//     function innerFunction(place) {
//       place = 'New York City';
//       return innermostFunction();

//       function innermostFunction() {
//         return 'Fullstack HQ is at ' + place + ', ' + place + ', ' + place + ', ' + place;
//       }
//     }
//   }
// }


function fullstackHQ() {
  var planet = "Planet Earth";
  var country = "United States";
  var state = "New York State";
  var city = "New York City";

  return "Fullstack HQ is at " + planet + ", " + country + ", " + state + ", " + city;
}

console.log(fullstackHQ());
// Output: Fullstack HQ is at Planet Earth, United States, New York State, New York City

