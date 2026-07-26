// code line by line
// one exception with if
// structure of if
// if accepts only 2 values
// else
// else if / else
// else if
// logical operator

let anythingThatEvaluatesToAbooleanValue = true;

// the structure of string is
// the keyword 'if'
// followed by () that can only have
//      either the boolean value true or false
//      or any expression that evaluates to the boolean value true or false
if (anythingThatEvaluatesToAbooleanValue) {
  //some code
}

// if the value is true, then the code block executes
if (true) {
  console.log("this code block will execute");
}
if (false) {
  console.log("this code block will not execute");
}

// or if the expression evaluates to true, then the code block executes
if (10 > 9) {
  // because 10 is greater than 9 comparision evaluates to true
  console.log("this code block will execute");
}
if (10 < 9) {
  // because 10 is less than 9 comparision evaluates to true
  console.log("this code block will not execute");
}

// if the 'if' condition is false, and if there is an 'else' block
// then that 'else' block will execute
if (10 < 9) {
  // because 10 is less than 9 comparision evaluates to true
  console.log("this code block will not execute");
} else {
  console.log("this will execute because the if condition is false");
}

// if the 'if' condition is false, and if there is an 'else if' block
// then that 'else if' block will also be evaluated to see
// whether to execute or not

if (10 < 9) {
  // because 10 is less than 9 comparision evaluates to true
  console.log("this code block will not execute");
} else if (9 > 10) {
  console.log(
    "this code block will also not execute because this expression will also evaluate to false"
  );
} else {
  console.log(
    "this will execute because all the if and else if conditions above it are false"
  );
}
