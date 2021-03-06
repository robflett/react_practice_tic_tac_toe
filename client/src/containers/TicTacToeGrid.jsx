import React from 'react'
import Cell from '../components/Cell'

class TicTacToeGrid extends React.Component {
  constructor(props) {
    super(props)
    this.squaresFilled = 0
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      board: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ]
    }
  }

  handleClick(event) {
    let board = this.state.board
    const x = event.target.dataset.x
    const y = event.target.dataset.y

    if (this.gameHasWinner() || this.gameIsDrawn()) {
      return
    } else {
      if (board[x][y] === "") {
        board[x][y] = this.props.currentPlayer
        this.setState({ board: board })
        if (this.gameHasWinner()) {
          this.props.announceResult(this.props.currentPlayer)
        } else {
          this.squaresFilled++
          if (this.gameIsDrawn()) {
            this.props.announceResult(null)
          } else {
            this.props.nextTurn()
          }
        }
      }    
    }
  }

  gameIsDrawn() {
      return( this.squaresFilled === 9)
  }

  gameHasWinner(){
    const board = this.state.board
    const player = this.props.currentPlayer
    let gameOver = false

    for (let i = 0; i <= 2; i++) {
      if (board[i][0] === player && board[i][1] === player && board[i][2] === player) gameOver = true
      if (board[0][i] === player && board[1][i] === player && board[2][i] === player) gameOver = true
    }

    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) gameOver =true
    if (board[2][0] === player && board[1][1] === player && board[0][2] === player) gameOver = true

    return gameOver
  }


  restart(){
    this.setState({board:[
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ]})
    this.squaresFilled = 0
    this.props.restartContainer()
  }

  render() {
    return (
      <div className="grid">
        <div className="row">
          <Cell status={this.state.board[0][0]} x={0} y={0} handleClick={this.handleClick} />
          <Cell status={this.state.board[0][1]} x={0} y={1} handleClick={this.handleClick} />
          <Cell status={this.state.board[0][2]} x={0} y={2} handleClick={this.handleClick} />
        </div>
        <div className="row">
          <Cell status={this.state.board[1][0]} x={1} y={0} handleClick={this.handleClick} />
          <Cell status={this.state.board[1][1]} x={1} y={1} handleClick={this.handleClick} />
          <Cell status={this.state.board[1][2]} x={1} y={2} handleClick={this.handleClick} />
        </div>
        <div className="row">
          <Cell status={this.state.board[2][0]} x={2} y={0} handleClick={this.handleClick} />
          <Cell status={this.state.board[2][1]} x={2} y={1} handleClick={this.handleClick} />
          <Cell status={this.state.board[2][2]} x={2} y={2} handleClick={this.handleClick} />
        </div>
         <button onClick={this.restart.bind(this)}>Restart Game</button>
      </div>

    )
  }
}

export default TicTacToeGrid