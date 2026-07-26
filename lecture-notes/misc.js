/*
DOES CALLING A METHOD ON A STRING
CHANGE THE STRING ITSELF?
*/
let word = "perfect";
// when we call a method, such as toUpperCase()
// on any data type, such as the string variable word
let lastWord = word.toUpperCase();

// the data itself might or might not change
// in the case of the method toUpperCase() on a string
// the data itself doesn't change
// it only evaluates to the changed state
console.log(word);

// so you have to capture the value in a different variable
// if you want to save the evaluated state
console.log(lastWord);
