import { Game } from "./game.js";

class Column {
  constructor(indexes) {
    this.indexes = [null, null, null, null, null, null];
  }

  add(currentPlayer) {
    // currentPlayer 1 or 2
    counter = 1;
    this.indexes[this.indexes.length - counter] = currentPlayer;

    counter++;

    // reference div id square-
    // counter = 1
    // put token at indexes[indexes.length - counter]
    //counter + 1
    // token at square 5
    // token at square 4
  }

  getTokenAt(rowIndexNum) {
    // if array index has a value of null / no token
    // if array index has a 1 then player token is there
    // if array index has  2 then player token is there
    // rowIndexNum
    if (this.indexes[rowIndexNum] === 1) {
      Game.playInColumn();
    } else if (this.indexes[rowIndexNum] === 2) {
      Game.playInColumn;
    } else {
      return null;
    }
  }
}

export { Column };
