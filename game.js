import {
   Column
} from "./column.js"

class Game {
   constructor(name1, name2) {
      this.name1 = name1;
      this.name2 = name2;
      this.getName();
      this.currentPlayer = 1;
      let col0 = new Column
      let col1 = new Column
      let col2 = new Column
      let col3 = new Column
      let col4 = new Column
      let col5 = new Column
      let col6 = new Column
      this.columns = [col0, col1, col2, col3, col4, col5, col6]
   }

   getName() {
      return `${this.name1} vs. ${this.name2}`;
   }

   playInColumn() {
      //  let clickTarget = document.getElementById("click-targets");
      //  clickTarget.addEventListener("click", (event) => {

      //* need: index val of this.columns
      //* call add() method passing in the current indexColums

      if (this.currentPlayer === 1) {
         this.currentPlayer = 2;
      } else {
         this.currentPlayer = 1;
      }
      //     });
      //   }
   }
}

export {
   Game
};
