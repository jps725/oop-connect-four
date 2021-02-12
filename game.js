import { Column } from "./column.js";

class Game {
  constructor(name1, name2) {
    this.name1 = name1;
    this.name2 = name2;
    this.getName();
    this.currentPlayer = 1;
    // let col0 = new Column
    // let col1 = new Column
    // let col2 = new Column
    // let col3 = new Column
    // let col4 = new Column
    // let col5 = new Column
    // let col6 = new Column
    this.columns = [
      new Column(),
      new Column(),
      new Column(),
      new Column(),
      new Column(),
      new Column(),
      new Column(),
    ];
  }

  getName() {
    return `${this.name1} vs. ${this.name2}`;
  }
  getTokenAt(rowIndex, columnIndex) {
    return this.columns[columnIndex].getTokenAt(rowIndex);
  }
  playInColumn(columnIndex) {
    //  let clickTarget = document.getElementById("click-targets");
    //  clickTarget.addEventListener("click", (event) => {

    //* need: index val of this.columns
    //* call add() method passing in the current indexColums
    this.columns[columnIndex].add(this.currentPlayer);

    if (this.currentPlayer === 1) {
      this.currentPlayer = 2;
    } else {
      this.currentPlayer = 1;
    }
    //     });
    //   }
  }
}

export { Game };
