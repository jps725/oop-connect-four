export class GameJsonSerializer {
  constructor(game) {
    this.game = game;
  }
  serialize() {
    const data = {
      name1: this.game.name1,
      name2: this.game.name2,
      tokens: [[], [], [], [], [], []],
    };
    for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
      for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
        const tokenValue = this.game.getTokenAt(rowIndex, columnIndex);
        data.tokens[rowIndex][columnIndex] = tokenValue;
      }
    }
    return JSON.stringify(data);
  }
}
