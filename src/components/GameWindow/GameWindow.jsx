import React, {Component} from 'react';

import './GameWindow.css';

class GameWindow extends Component {

    render() {
        return (
            <div>
                <canvas ref="canvas" className="game-window"></canvas>
            </div>
        )
    }
}

export default GameWindow;
