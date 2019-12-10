import React, { Component } from 'react';

import './GameWindow.css';

class GameWindow extends Component {
  state = {
    ref: 'canvas'
  };

  render() {
    const { ref } = this.state;
    return (
      <div className="game-window">
        <canvas ref={ref} />
      </div>
    );
  }
}

export default GameWindow;
