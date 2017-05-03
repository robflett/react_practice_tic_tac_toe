import React from 'react';
import ReactDOM from 'react-dom';
import GameContainer from './containers/GameContainer'

window.onload = function(){
  ReactDOM.render(
    <GameContainer className="game-container"/>,
    document.getElementById('app')
  );
}
