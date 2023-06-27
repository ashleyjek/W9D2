import View from "./ttt-view";
import Game from "/ttt_node/game.js";

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  const el = document.querySelector('.ttt')
  const view = new View(game, el);
  
  // view.setupBoard()
  
});