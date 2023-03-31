import React, { useState, useContext } from 'react';
import { GameContext } from '../GameContext';
import Configuration from '../Configuration';
import "./styles.css";

const Navbar = () => {
    const [showConfiguration, setShowConfiguration] = useState(false);
    const { nextPlayer, winner } = useContext(GameContext);
    const handleConfigurationButtonClick = () => setShowConfiguration(!showConfiguration);

    return (
        <>
            <header className="navbar">
                <button onClick={handleConfigurationButtonClick} className="configuration-button"><span role="img" aria-label="configuration button">⚙️</span></button>
                <h1 className="title">Tic Tac Toe</h1>
                <p className="announcement">{winner ? `Winner: ${winner}` : `Next Player: ${nextPlayer}`}</p>
            </header>
            {showConfiguration && <Configuration close={() => setShowConfiguration(false)} />}
        </>
    );
};

export { Navbar, Navbar as default };
