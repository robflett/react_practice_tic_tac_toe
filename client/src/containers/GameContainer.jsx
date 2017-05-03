import React from 'react'
import TicTacToeGrid from "./TicTacToeGrid"

class GameContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPlayer: "O"
    }
  }

  nextTurn() {
    // if (this.state.currentPlayer === "O") nextPlayer = "X" else nextPlayer = "O"
    const nextPlayer = (this.state.currentPlayer === "O") ? "X" : "O"
    this.setState({ currentPlayer: nextPlayer })
  }

  render( ) {
    return (
      <div className="game-container">
        <h1>Tic Tac Toe !</h1>
        <TicTacToeGrid nextTurn={this.nextTurn.bind(this)} currentPlayer={this.state.currentPlayer}/>
        <p>Current Player: {this.state.currentPlayer}</p>
      </div>
    )
  }

}

export default GameContainer
