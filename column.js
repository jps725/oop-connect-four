import { Game } from "./game.js";

class Column {
  constructor(indexes) {
    this.indexes = [null, null, null, null, null, null];
  }

  add(currentPlayer) {
    // currentPlayer 1 or 2
    // let counter = 1;
    // this.indexes[this.indexes.length - counter] = currentPlayer;

    // counter++;
    for (let index = 5; index >= 0; index--) {
      if (this.indexes[index] === null) {
        this.indexes[index] = currentPlayer;
        break;
      }
    }
  }

  getTokenAt(rowIndexNum) {
    return this.indexes[rowIndexNum];
  }
  isFull() {
    if (this.indexes[0] !== null)
      return true
  }
}

export { Column };
