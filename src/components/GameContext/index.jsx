import React, { useState, createContext } from "react";
import calculateWinner from "../calculateWinner";

const GameContext = createContext();

const GameContextProvider = ({ children }) => {
    const [gridSize, setGridSize] = useState(3);
    const [players, setPlayers] = useState(["X", "O"]);
    const [history, setHistory] = useState([
      Array(Math.pow(gridSize, 2)).fill(null)
    ]);
    const [stepNumber, setStepNumber] = useState(0);
    const [playerIndex, setPlayerIndex] = useState(0);
  
    const currentSquares = history[stepNumber];
    const winner = calculateWinner(currentSquares);
    const nextPlayer = players[stepNumber % players.length];
    const boardIsFull =
      currentSquares.filter((squareValue) => squareValue === null).length === 0;
  
    const jumpToStep = (step) => {
      setStepNumber(step);
      setPlayerIndex(step % players.length);
    };
  
    const handleSquareClick = (squareIndex) => {
      const preventClicks = winner || currentSquares[squareIndex];
      if (preventClicks) {
        return;
      }
  
      const newStepNumber = stepNumber + 1;
      jumpToStep(newStepNumber);
  
      let newSquares = [...currentSquares];
      newSquares[squareIndex] = players[playerIndex];
      const newHistory = history.slice(0, newStepNumber).concat([newSquares]);
      setHistory(newHistory);
    };
    
    return (
        <GameContext.Provider
            value={{
                gridSize,
                setGridSize,
                players,
                setPlayers,
                nextPlayer,
                boardIsFull,
                winner,
                squares: currentSquares,
                handleSquareClick,
                stepsCount: history.length,
                jumpToStep,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};

export { GameContext, GameContextProvider, GameContext as default };
