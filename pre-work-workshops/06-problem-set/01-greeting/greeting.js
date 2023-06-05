function greeting(name) {
  if (name) {
    return "Hello " + name + "!";
  } else {
    return "Hello!";
  }
}
console.log(greeting("Sadie"));
console.log(greeting());
