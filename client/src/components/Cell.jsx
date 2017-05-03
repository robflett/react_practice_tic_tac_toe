import React from 'react'

class Cell extends React.Component {

  render(){

    return(
      <div className="cell" onClick={this.props.handleClick} data-x={this.props.x} data-y={this.props.y}><p>{this.props.status}</p></div>
    )
  }
}

export default Cell
