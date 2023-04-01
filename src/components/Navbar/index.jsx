import React, { useState, useContext } from 'react';
import { GameContext } from '../GameContext';
import Configuration from '../Configuration';
import "./styles.css";

const Navbar = () => {
    const [showConfiguration, setShowConfiguration] = useState(false);
    const { nextPlayer, winner, boardIsFull } = useContext(GameContext);
    const handleConfigurationButtonClick = () => setShowConfiguration(!showConfiguration);

    let announcement = "Add Players";
    if (nextPlayer) {
        announcement = `Next Player: ${nextPlayer}`;
    }

    if (winner) {
        announcement = `Winner: ${winner}`;
    } else if (boardIsFull) {
        announcement = "Cat's Game";
    }

    return (
        <>
            <header className="navbar">
                <div className="configuration-container">
                    <button onClick={handleConfigurationButtonClick} className="action-icon">
                        <span role="img" aria-label="configuration button">⚙️</span>
                    </button>
                </div>
                <h1 className="title">Tic Tac Toe</h1>
                <p className="announcement">{announcement}</p>
            </header>
            {showConfiguration && <Configuration close={() => setShowConfiguration(false)} />}
        </>
    );
};

export { Navbar, Navbar as default };
