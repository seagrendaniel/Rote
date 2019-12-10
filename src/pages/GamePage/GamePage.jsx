import React from 'react';
import { Link } from 'react-router-dom';
import GameWindow from '../../components/GameWindow/GameWindow';

import './GamePage.css';

const GamePage = props => (
  <>
    <h1 className="title"> Welcome to Rote </h1>
    <div>
      <div className="game-title">
        <h3> Rote </h3>
      </div>
      <div>
        <GameWindow />
      </div>
    </div>
  </>
);

export default GamePage;
