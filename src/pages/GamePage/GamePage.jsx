import React from 'react';
import { Link } from 'react-router-dom';
import GameWindow from '../../components/GameWindow/GameWindow';

import './GamePage.css';

const GamePage = props => (
  <>
    <h1 className="title"> Welcome to Rote </h1>
    <div>
      <div className="game-title">
        <button type="button" className="start-button"> Click Here to start </button>
      </div>
      <div>
        <GameWindow />
      </div>
    </div>
  </>
);

export default GamePage;
