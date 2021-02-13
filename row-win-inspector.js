export class RowWinInspector {
  constructor(columns) {
    this.columns = columns;
  }

  inspect() {
    // [col, col, col, col]
    // col[0]
    for (let i = 0; i < 6; i++) {
      let num1 = this.columns[0].getTokenAt(i);
      let num2 = this.columns[1].getTokenAt(i);
      let num3 = this.columns[2].getTokenAt(i);
      let num4 = this.columns[3].getTokenAt(i);

      if (num1 === num2 && num2 === num3 && num3 === num4 && num1 !== null) {
        return num1;
      }
    }

    return 0;
  }
}
