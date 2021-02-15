import { Game } from "./game.js";
// import { GameJsonDeserializer } from "./game-json-deserializer.js";
import { GameJsonSerializer } from "./game-json-serializer.js";

let game = undefined;
// check to see if there's json in local storage with key
// const json = window.localStorage.getItem("connect-four");
// if (json) {
//   // deserialized passed to game and update game
//   const deserializer = new GameJsonDeserializer(json);
//   game = deserializer.deserialize();
//   updateUI();
// }
function updateUI(colTarget) {
  let board = document.getElementById("board-holder");
  let gameName = document.getElementById("game-name");
  let clickTarget = document.getElementById("click-targets");
  if (game === undefined) {
    board.classList.add("is-invisible");
  } else {
    board.classList.remove("is-invisible");
    gameName.innerHTML = game.getName();

    for (let columnIndex = 0; columnIndex <= 6; columnIndex++) {
      let fullColumn = game.isColumnFull(columnIndex);
      let col = document.getElementById(`column-${columnIndex}`);
      if (fullColumn) {
        col.classList.add("full");
      } else {
        col.classList.remove("full");
      }
    }
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
    if (!colTarget.startsWith("column-")) return;

    let colIndex = Number.parseInt(colTarget[colTarget.length - 1]);
    game.playInColumn(colIndex);

    // serializing
    const serializer = new GameJsonSerializer(game);
    const json = serializer.serialize();
    window.localStorage.setItem("connect-four", json);

    updateUI();
  });
});
