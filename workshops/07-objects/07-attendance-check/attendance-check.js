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
]

// YOUR CODE BELOW

function attendanceCheck(day) {
  let finalArray = []
  for (let k = 0; k < classRoom.length; k++) {
      for (keys in classRoom[k]) {
          let days = classRoom[k][keys]
          for (let i = 0; i < days.length; i++) {
              if (days[i][day]) {
                  finalArray.push(keys)
              }
          }
      }
  }
  console.log(finalArray)
  return finalArray
}

attendanceCheck('Wednesday')