class View {
  constructor(game, el) {
    this.game = game;
    this.el = el; // .ttt figure is el
    this.setupBoard()
  }
  
  setupBoard() {


    let ul = document.createElement('ul')
    this.el.appendChild(ul)
    
  for (let i = 0; i < 9; i++) {
    let pos = document.createElement('li')
    ul.appendChild(pos)

    }



  }
  
  handleClick(e) {
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;