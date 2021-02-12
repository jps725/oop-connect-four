class Game {
  constructor(name1, name2) {
    this.name1 = name1;
    this.name2 = name2;
    this.getName();
    this.currentPlayer = 1;
  }

  getName() {
    return `${this.name1} vs. ${this.name2}`;
  }

  playInColumn() {
    //  let clickTarget = document.getElementById("click-targets");
    //  clickTarget.addEventListener("click", (event) => {
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
