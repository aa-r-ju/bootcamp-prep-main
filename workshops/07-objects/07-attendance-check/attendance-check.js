let classRoom = [
  {
    Marnie: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: true },
      { Thursday: true },
      { Friday: true },
    ],
  },
  {
    Lena: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: true },
      { Thursday: false },
      { Friday: true },
    ],
  },
  {
    Shoshanna: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: false },
      { Thursday: true },
      { Friday: false },
    ],
  },
  {
    Jessa: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: false },
      { Thursday: false },
      { Friday: true },
    ],
  },
];

// YOUR CODE BELOW
function attendanceCheck(day) {
  let result = [];
  for (let i = 0; i < classRoom.length; i++) {
    for (let keys in classRoom[i]) {
      for (let j = 0; j < classRoom[i][keys].length; j++) {
        let test = classRoom[i][keys][j];
        if (test[day] === true) {
          result.push(keys);
        }
      }
    }
  }
  return result;
}
console.log(attendanceCheck("Monday"));
console.log(attendanceCheck("Wednesday"));
