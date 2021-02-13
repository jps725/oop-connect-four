export class DiagnoalWinInspector {
  constructor(columns) {
    this.columns = columns;
  }

  inspect() {
    for (let i = 0; i < 3; i++) {
      let num1 = this.columns[0].getTokenAt(i);
      let num2 = this.columns[1].getTokenAt(i + 1);
      let num3 = this.columns[2].getTokenAt(i + 2);
      let num4 = this.columns[3].getTokenAt(i + 3);

      if (num1 === num2 && num2 === num3 && num3 === num4 && num1 !== null) {
        return num1;
      }

      num1 = this.columns[0].getTokenAt(i + 3);
      num2 = this.columns[1].getTokenAt(i + 2);
      num3 = this.columns[2].getTokenAt(i + 1);
      num4 = this.columns[3].getTokenAt(i);

      if (num1 === num2 && num2 === num3 && num3 === num4 && num1 !== null) {
        return num1;
      }
    }
    return 0;
  }
}
