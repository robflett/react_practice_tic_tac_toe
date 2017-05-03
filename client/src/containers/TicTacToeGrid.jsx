import React from 'react'
import Cell from '../components/Cell'

class TicTacToeGrid extends React.Component {
  constructor(props) {
    super(props)
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
    // console.log(event.target.dataset.x, event.target.dataset.y)
    let board = this.state.board
    // CHECK CURRENT STATUS OF CELL FIRST
    board[event.target.dataset.x][event.target.dataset.y] = this.props.currentPlayer
    this.setState({ board: board })
    this.props.nextTurn()
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
      </div>
    )
  }
}

export default TicTacToeGrid