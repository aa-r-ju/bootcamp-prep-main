et ticTacToe = {
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
    move: function (character, rowNum, colNum) {
      this.board[rowNum][colNum] = character;
      console.log(this.board);
      if (ticTacToe.board[1][1] === character) {
        console.log("Test passed!");
      } else {
        console.log("Test failed!");
      }
  
      return this.board;
    },
    clear: function () {},
  };
  
  for (let i = 0; i < 5; i++) {
    console.log("Hello world");
  }
  