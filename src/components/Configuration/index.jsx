import React, { useState, useContext } from 'react';
import { GameContext } from '../GameContext';
import "./styles.css";

const Configuration = ({ close }) => {
    const { gridSize, setGridSize, players, setPlayers } = useContext(GameContext);
    const [newPlayerSymbol, setNewPlayerSymbol] = useState("");

    const handleChangeGridSize = e => {
        const newSize = e.target.value;
        const minGridSize = 1;

        if (newSize < minGridSize) {
            setGridSize(minGridSize);
            return;
        }

        setGridSize(newSize);
    };

    const handleNewPlayerSymbolChange = e => {
        setNewPlayerSymbol(e.target.value.slice(-1));
    };

    const handleAddNewPlayerSymbol = () => {
        if (players.filter(player => player === newPlayerSymbol).length === 0) {
            setPlayers([ ...players, newPlayerSymbol ]);
        }
        setNewPlayerSymbol("");
    };

    return (
        <>
            <div className="panel">
                <div className="panel-title">Configuration Panel</div>
                <div className="panel-content">
                    <label className="input-field">Grid Size: <input className="input-grid-size" type="number" value={gridSize} onChange={handleChangeGridSize} /></label>
                    <label className="input-field">
                        Players:
                        <input
                            className="input-player-symbol"
                            value={newPlayerSymbol}
                            onChange={handleNewPlayerSymbolChange}
                            onKeyDown={e => e.key === "Enter" && handleAddNewPlayerSymbol()}
                            type="text"
                        />
                        <button onClick={handleAddNewPlayerSymbol} className="new-player-button">+</button>
                    </label>
                    {players.map(player => <div key={player} className="player-symbol">{player}</div>)}
                </div>
            </div>
            <div className="panel-overlay" onClick={() => close()} />
        </>
    );
};

export { Configuration, Configuration as default };
