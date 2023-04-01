import React, { useState, useContext } from 'react';
import { GameContext } from '../GameContext';
import "./styles.css";

const Configuration = ({ close }) => {
    const {
        gridSize, setGridSize, players, setPlayers, showHistory, setShowHistory
    } = useContext(GameContext);
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

    const removePlayerAtIndex = playerToRemove => (
        setPlayers(players.filter(player => player !== playerToRemove))
    );

    return (
        <>
            <div className="panel">
                <div className="panel-title">Configuration Panel</div>
                <div className="panel-content">
                    <label className="input-field">
                        <span>Show History:</span>
                        <input type="checkbox" checked={showHistory} onChange={e => setShowHistory(e.target.checked)} />
                    </label>
                    <label className="input-field">
                        <span>Grid Size:</span>
                        <input className="input-grid-size" type="number" value={gridSize} onChange={handleChangeGridSize} />
                    </label>
                    <p>Players:</p>
                    <ul className="player-symbols">
                    {players.map(player => (
                        <div key={player} className="player-symbol input-field">
                            {player}
                            <button onClick={() => removePlayerAtIndex(player)} className="action-icon">
                                <span role="img" aria-label="Remove Player">➖</span>
                            </button>
                        </div>
                    ))}
                    </ul>
                    <label className="input-field">
                        <span>Add Player:</span>
                        <input
                            className="input-player-symbol"
                            value={newPlayerSymbol}
                            onChange={handleNewPlayerSymbolChange}
                            onKeyDown={e => e.key === "Enter" && handleAddNewPlayerSymbol()}
                            type="text"
                        />
                        <button disabled={!newPlayerSymbol} onClick={handleAddNewPlayerSymbol} className="action-icon">
                            <span role="img" aria-label="Add Player">➕</span>
                        </button>
                    </label>
                </div>
            </div>
            <div className="panel-overlay" onClick={() => close()} />
        </>
    );
};

export { Configuration, Configuration as default };
