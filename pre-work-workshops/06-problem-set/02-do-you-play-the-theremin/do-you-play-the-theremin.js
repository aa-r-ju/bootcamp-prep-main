function doYouPlayTheTheremin(name) {
  if (name[0] === "S" || name[0] === "s") {
    return true;
  } else {
    return false;
  }
}
console.log(doYouPlayTheTheremin("Scott"));
console.log(doYouPlayTheTheremin("Griffin"));
