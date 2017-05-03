import React from 'react'
import TicTacToeGrid from "./TicTacToeGrid"
import StatusView from '../components/StatusView'

class GameContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPlayer: "O",
      status: "Current Player: O"
    }
  }

  nextTurn() {
    // if (this.state.currentPlayer === "O") nextPlayer = "X" else nextPlayer = "O"
    const nextPlayer = (this.state.currentPlayer === "O") ? "X" : "O"
    const status = "Current Player: " + nextPlayer
    this.setState({ currentPlayer: nextPlayer, status: status })
  }

  announceResult() {
    const status = this.state.currentPlayer + " WINS!"
    this.setState({ status: status })
  }

  render( ) {
    return (
      <div className="game-container">
        <h1>Tic Tac Toe !</h1>
        <TicTacToeGrid nextTurn={this.nextTurn.bind(this)} currentPlayer={this.state.currentPlayer} announceResult={this.announceResult.bind(this)}/>
        <StatusView message={this.state.status} />
        
      </div>
    )
  }

}

export default GameContainer
