// let ticTacToe = {
//     board: [
//       [null, null, null],
//       [null, null, null],
//       [null, null, null],
//     ],
//     move: function (character, rowNum, colNum) {
//       this.board[rowNum][colNum] = character;
//       console.log(this.board);
//       if (ticTacToe.board[1][1] === character) {
//         console.log("Test passed!");
//       } else {
//         console.log("Test failed!");
//       }
  
//       return this.board;
//     },
//     clear: function () {},
//   };
  
//   for (let i = 0; i < 5; i++) {
//     console.log("Hello world");
//   }

let ticTacToe = {
  board: [[null, null, null], [null, null, null], [null, null, null]],

  move: function(character, rowNum, colNum) {
    if (this.board[rowNum][colNum] === null) {
      this.board[rowNum][colNum] = character;
    }
    console.log(this.board);
    return this.board;
  },

  clear: function() {
    this.board = [[null, null, null], [null, null, null], [null, null, null]];
    console.log(this.board);
    return this.board;
  }
};

// Example usage:
ticTacToe.move('X', 0, 0);
ticTacToe.move('O', 1, 1);
ticTacToe.move('X', 2, 2);
ticTacToe.clear();
  