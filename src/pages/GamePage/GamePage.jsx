import React from 'react';
import { Link } from 'react-router-dom';

import './GamePage.css';

const GamePage = (props) => {
    return (
        <>
        <h1 className="title"> Welcome to Rote </h1>
        <div>
            <div className="game-title">
                <h3> Rote </h3>
            </div>
            <div>
                <canvas>
                    {/* Canvas Area here*/} 
                </canvas>
            </div>
        </div>
        </>
    )
}

export default GamePage;