// import Game from "./Game.js";
// import GameView from "./GameView.js";

// let game = new Game();

// let gameView = new GameView(document.getElementById("app"));
// console.log(game.turn);
// game.makeMove(0);
// console.log(game.board.join(","));
// console.log(game.turn);
// game.makeMove(6);
// console.log(game.turn);
// game.makeMove(5);
// console.log(game.board.join(","));

// game.makeMove(1); //X
// game.makeMove(0); //0
// game.makeMove(2); //x
// game.makeMove(3); //o
// game.makeMove(4); //X
// game.makeMove(5); //O
// console.log(game.isInProgress());
// game.makeMove(6); //X
// console.log(game.isInProgress());
// game.makeMove(7); //0
// console.log(game.isInProgress());
// game.makeMove(8); //X
// console.log(game.board);
// console.log(game.findWinningCombination());
// console.log(game.isInProgress());

import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView(document.getElementById("app"));

// define functions
gameView.onTileClick = function (i) {
  game.makeMove(i);
  gameView.update(game);
};

gameView.onRestartClick = function () {
  game = new Game();
  gameView.update(game);
};

gameView.update(game);
