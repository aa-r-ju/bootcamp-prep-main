let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// YOUR CODE BELOW
let letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let leetChars = [
    "@",
    "8",
    "(",
    "|)",
    "3",
    "ph",
    "g",
    "#",
    "l",
    "_|",
    "|<",
    "1",
    "|'|'|",
    "//",
    "0",
    "|D",
    "(,)",
    "|2",
    "5",
    "+",
    "|_|",
    "|/",
    "|/|/'",
    "><",
    "j",
    "2",
  ];
  
  // YOUR CODE BELOW
  
  function leetTranslator(val) {
    val = val.toLowerCase();
    let leetObj = {};
    for (let k = 0; k < letters.length; k++) {
      leetObj[letters[k]] = leetChars[k];
    }
    let finalStr = "";
    for (let i = 0; i < val.length; i++) {
      //console.log(val[i]);
      //leetObj[val[i]]
      let num = leetObj[val[i]];
      finalStr = finalStr + num;
    }
    console.log(finalStr);
    return finalStr;
  }
  leetTranslator("Fullstack");
  