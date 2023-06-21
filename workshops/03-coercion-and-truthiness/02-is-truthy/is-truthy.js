function isTruthy(arg) {
  if (Boolean(arg) === true) {
    return true;
  } else {
    switch (arg) {
      case null:
        return "The null value is falsey";
        break;
      case undefined:
        return "undefined is falsey";
        break;
      case 0:
        return "The number 0 is falsey (the only falsey number)";
        break;
      case "":
        return "The empty string is falsey (the only falsey string)";
        break;
      default:
        return "The boolean value false is falsey";
    }
  }
}