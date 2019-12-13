import React, { Component } from 'react';
import {
  Layer, Rect, Stage, Group
} from 'react-konva';

import './GameWindow.css';

class GameWindow extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef(); // create ref to be manipulated
  }

  componentDidMount() {
    const { canvas } = this.canvasRef;
    const ctx = canvas.getContext('2d'); // ctx is variable to be used in drawing
  }

  /* --- Drawing commands --- */

  /* --- Render function --- */
  render() {
    return (
      <div className="game-window">
        <canvas ref={this.canvasRef} />
      </div>
    );
  }
}

export default GameWindow;
