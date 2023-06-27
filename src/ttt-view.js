class View {
  constructor(game, el) {
    this.game = game;
    this.el = el; // .ttt figure is el
    this.handleClick = this.handleClick.bind(this);
    this.setupBoard()
  }
  
  setupBoard() {
    let ul = document.createElement('ul')
    this.el.appendChild(ul)
    ul.addEventListener("click", this.handleClick);

      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          let pos = document.createElement('li')
          ul.appendChild(pos)
          pos.dataset.pos = `[${i}, ${j}]`
        }
      }       
  }
  
  handleClick(e) {
    let position = e.target;
    debugger
    this.game.playMove(position.dataset.pos[0], position.dataset.pos[1]);


  }



  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;