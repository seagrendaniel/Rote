import React, { Component } from 'react';

import './GameWindow.css';

class GameWindow extends Component {
  render() {
    return (
      <div className="game-window">
        <canvas ref="canvas" />
      </div>
    );
  }
}

export default GameWindow;
