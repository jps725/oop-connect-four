class ColumnWinInspector {
   constructor(column) {
      this.column = column
   }

   inspect() {
      for (let i = 0; i < 3; i++) {
         let num1 = this.column.getTokenAt(i)
         let num2 = this.column.getTokenAt(i + 1)
         let num3 = this.column.getTokenAt(i + 2)
         let num4 = this.column.getTokenAt(i + 3)
         if (num1 === num2 && num2 === num3 && num3 === num4 && num1 !== null) {
            return num1
         }
      }
      return 0
   }
}


export {
   ColumnWinInspector
}


/*

* loop through this.column[index]
   * if that plus index + (index+1) + (index+2) + (index+3) === 4 (p1 wins)
   * if that plus index + (index+1) + (index+2) + (index+3) === 8 (p2 wins)

*/
