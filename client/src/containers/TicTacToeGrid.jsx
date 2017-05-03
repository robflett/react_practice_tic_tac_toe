import React from 'react'

class TicTacToeGrid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      board: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ]
    }
  }

  render() {
    return (
      <div className="grid">
        <div className="row">
          <div className="cell"><p>{this.state.board[0][0]}</p></div>
          <div className="cell"><p>{this.state.board[0][1]}</p></div>
          <div className="cell"><p>{this.state.board[0][2]}</p></div>
        </div>
        <div className="row">
          <div className="cell"><p>{this.state.board[1][0]}</p></div>
          <div className="cell"><p>{this.state.board[1][1]}</p></div>
          <div className="cell"><p>{this.state.board[1][2]}</p></div>
        </div>
        <div className="row">
          <div className="cell"><p>{this.state.board[2][0]}</p></div>
          <div className="cell"><p>{this.state.board[2][1]}</p></div>
          <div className="cell"><p>{this.state.board[2][2]}</p></div>
        </div>
      </div>
    )
  }
}

export default TicTacToeGrid