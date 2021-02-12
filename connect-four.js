/*

//* check if a column is full (all spaces filled in column) --> if it is full, get id for that column and change class to "click-target full"

//* if P1 turn, indicate via black token, P2 is red token
      //* change class on the div target to be color of current player

//* putting a token in a square creates a div set to the color and append that div to the square element when it drops in (black or red)

*/

import { Game } from "./game.js";
import { Column } from "./column.js";

let game = undefined;
function updateUI() {
  let board = document.getElementById("board-holder");
  let gameName = document.getElementById("game-name");
  let clickTarget = document.getElementById("click-targets");
  if (game === undefined) {
    board.classList.add("is-invisible");
  } else {
    board.classList.remove("is-invisible");
    gameName.innerHTML = game.getName();

    for (let rowIndex = 0; rowIndex <= 5; rowIndex++) {
      for (let columnIndex = 0; columnIndex <= 6; columnIndex++) {
        let square = document.getElementById(
          `square-${rowIndex}-${columnIndex}`
        );
        square.innerHTML = "";
        let playerNumber = game.getTokenAt(rowIndex, columnIndex);
        if (playerNumber === 1) {
          let tokenBlack = document.createElement("div");
          tokenBlack.classList.add("token");
          tokenBlack.classList.add("black");
          square.appendChild(tokenBlack);
        } else if (playerNumber === 2) {
          let tokenRed = document.createElement("div");
          tokenRed.classList.add("token");
          tokenRed.classList.add("red");
          square.appendChild(tokenRed);
        }
      }
    }

    if (game.currentPlayer === 1) {
      clickTarget.classList.remove("red");
      clickTarget.classList.add("black");
    } else {
      clickTarget.classList.remove("black");
      clickTarget.classList.add("red");
    }
  }
}
window.addEventListener("DOMContentLoaded", () => {
  let newGameBtn = document.getElementById("new-game");
  let playerOne = document.getElementById("player-1-name");
  let playerTwo = document.getElementById("player-2-name");
  playerOne.addEventListener("keyup", (event) => {
    if (playerOne.value !== "") {
      newGameBtn.disabled = false;
    } else {
      newGameBtn.disabled = true;
    }
  });
  playerTwo.addEventListener("keyup", (event) => {
    if (playerTwo.value !== "") {
    }
  });

  newGameBtn.addEventListener("click", (event) => {
    game = new Game(playerOne.value, playerTwo.value);
    playerOne.value = "";
    playerTwo.value = "";
    newGameBtn.disabled = true;
    updateUI();
  });

  let clickTarget = document.getElementById("click-targets");
  clickTarget.addEventListener("click", (event) => {
    // get the last char of the id string/ number.parseint to integer becomes column index
    let colTarget = event.target.id;
    let colIndex = Number.parseInt(colTarget[colTarget.length - 1]);

    game.playInColumn(colIndex);
    updateUI();
  });
});
