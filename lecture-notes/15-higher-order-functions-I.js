/*
Overview:
- Why functions are special: functions are 'first-class objects'
  - Passing functions into other functions (callbacks)
  - .forEach

Details:
- Functions can be put wherever other data types can be put
    - var, array, object, pass as argument, return, anonymous
- Passing function & arg to function, that will call it
    - passing method as callback
    - .forEach function
        - forEach does not return anything
        - write our own forEach
    - Writing your own forEach
        - Array of Vals, one function
*/
////////////////////////////////////////////////////////////
//assigning a function to a variable
let sayHello = function () {
  console.log("Hello there", this.fName);
};

//create an object
let myObj = {
  fName: "Sushil",
  hello: sayHello, //asign the value of a key to a function
};

/*
Calling the same code as a function verses as a method
*/
//calling the function
sayHello();

//calling the same function as a method of the object 'myObj'
myObj.hello();

////////////////////////////////////////////////////////////
/*
putting a function inside an array
*/
let myArray = [sayHello, sayHello, sayHello];

//now loop through the array, and execute the functions inside it
for (let i = 0; i < myArray.length; i++) {
  myArray[i]();
}
////////////////////////////////////////////////////////////
/*
calling the forEach method of array
*/
//declare the array
let secondArray = ["a", "b", "c"];

//define the function to pass to forEach method of array
let funcToPass = function (param1, param2) {
  console.log("called from forEach", param1, param2);
};

//call the forEach method of array by passing it a function
secondArray.forEach(funcToPass);
////////////////////////////////////////////////////////////
/*
writing our own 'myForEach' method as a key value pair
inside the array 'secondArray', because an array
is just a type of object. Our 'myForEach' method
will work the same as the built in 'forEach' method
of array 
*/

//because an array is a type of object, we can also
//create a new key value pair inside the array with
//the dot operator
//here - we are defining a new key 'myForEach'
//inside the 'secondArray' array which is also an object
secondArray.myForEach = function (someFunc) {
  for (let i = 0; i < this.length; i++) {
    someFunc(this[i], i);
  }
};

//what will the length of the array be now?
//will it count the key 'myForEach' or not?
console.log(secondArray.length);

//lets call the 'myForEach' as a method of 'secondArray'
secondArray.myForEach(funcToPass);
////////////////////////////////////////////////////////////
/*
write our own ourForEach function
that will work like the array's built in forEach method
but it is a function, not a method
*/

//define the ourForEach function
function ourForEach(someArray, someFunc) {
  for (let i = 0; i < someArray.length; i++) {
    someFunc(someArray[i], i);
  }
}

ourForEach(secondArray, funcToPass);
////////////////////////////////////////////////////////////
/*
passing function as an argument to another function
*/

//declare a function 'myFunction' that executes it's parameter
function myFunction(myParam) {
  myParam();
}
//what will happen when we pass the key of an object
//whos value is a function?
myFunction(myObj.hello);

//passing a variable whose value is a function
//as an argument to another function
myFunction(sayHello);

//passing an anonymous function as an argument
//to a function
myFunction(function () {
  console.log("Hello there", this.fName);
});
////////////////////////////////////////////////////////////
/*
executing a function that returns a function
*/
//declare a function that returns a function
function myFunctionReturn() {
  return function retFunc() {
    console.log("this is a function returned by another function");
    return "hello";
  };
}

//what will happen when we console.log
//the value returned by executing the valur
//that is returned by executing the function 'myFunctionReturn'?
console.log(myFunctionReturn()());
