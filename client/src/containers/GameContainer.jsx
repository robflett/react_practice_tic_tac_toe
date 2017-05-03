import React from 'react'
import TicTacToeGrid from "./TicTacToeGrid"

class GameContainer extends React.Component {
  constructor(props) {
    super(props)

  }

  render( ) {
    <div className="game-container">
      <h1> Tic Tac Toe !</h1>
      <TicTacToeGrid/>
    </div>
  }

}

export default GameContainer
