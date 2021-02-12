import {
   Column
} from "./column.js";
import {
   ColumnWinInspector
} from "./column-win-inspector.js"

class Game {
   constructor(name1, name2) {
      this.name1 = name1;
      this.name2 = name2;
      this.getName();
      this.currentPlayer = 1;
      this.columns = [
         new Column(),
         new Column(),
         new Column(),
         new Column(),
         new Column(),
         new Column(),
         new Column(),
      ];
      this.winnerNumber = 0
   }

   getName() {
      if (this.winnerNumber === 3) {
         return `${this.name1} tied with ${this.name2}`
      }
      if (this.winnerNumber === 1) {
         return `${this.name1} wins!`
      }
      if (this.winnerNumber === 2) {
         return `${this.name2} wins!`
      }
      return `${this.name1} vs. ${this.name2}`;
   }
   getTokenAt(rowIndex, columnIndex) {
      return this.columns[columnIndex].getTokenAt(rowIndex);
   }
   playInColumn(columnIndex) {
      //  let clickTarget = document.getElementById("click-targets");
      //  clickTarget.addEventListener("click", (event) => {

      this.columns[columnIndex].add(this.currentPlayer);
      this.checkForTie()
      this.checkForColumnWin()
      if (this.currentPlayer === 1) {
         this.currentPlayer = 2;
      } else {
         this.currentPlayer = 1;
      }
   }
   isColumnFull(columnIndex) {
      if (this.winnerNumber === 1 || this.winnerNumber === 2) {
         return true
      }
      return this.columns[columnIndex].isFull()
   }
   checkForTie() {
      let fullArr = this.columns.filter((column) => column.isFull())
      if (fullArr.length === 7) {
         this.winnerNumber = 3
      }
   }
   checkForColumnWin() {
      if (this.winnerNumber !== 0) {
         return
      }
      for (let colIdx = 0; colIdx < this.columns.length; colIdx++){
         let column = this.columns[colIdx]
         let inspector = new ColumnWinInspector(column)
         let winnerNumber = inspector.inspect()
         if (winnerNumber === 1 || winnerNumber === 2) {
            this.winnerNumber = winnerNumber
            console.log(winnerNumber)
         }
      }
   }
}

export {
   Game
};
