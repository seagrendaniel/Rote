import React, { Component } from 'react';

import './GameWindow.css';

class GameWindow extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const { canvas } = this.canvasRef;
    const ctx = canvas.getContext('2d');
  }

  render() {
    return (
      <div className="game-window">
        <canvas ref={this.canvasRef} />
      </div>
    );
  }
}

export default GameWindow;
