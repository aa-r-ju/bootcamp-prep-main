let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

// YOUR CODE BELOW
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
  
  // // YOUR CODE BELOW
  // function attendanceCheck(week) {
  // let attendance = []
  // for(let i = 0 ; i < week.length ; i++) {
  //     let
  // }
  // }
  
  function attendanceCheck(dayOfWeek) {
    let presentStudents = [];
  
    for (let i = 0; i < classRoom.length; i++) {
      let student = classRoom[i];
      //console.log(student);
      for (key in student) {
        let val1 = student[key];
        //console.log(val1);
  
        for (let j = 0; j < val1.length; j++) {
          let val2 = val1[j];
          //console.log(val2);
          //console.log("----------");
          if (dayOfWeek in val2) {
            if (val2[dayOfWeek] === true) presentStudents.push(key);
          }
        }
      }
    }
    return presentStudents;
  }
  //   if (student.attendance(dayOfWeek)) {
  //     presentStudents.push(student.name);
  //   }
  // }
  
  // return presentStudents;
  
  console.log(attendanceCheck("Monday"));
  