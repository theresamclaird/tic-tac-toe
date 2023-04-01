import React, { useState, createContext } from "react";
import calculateWinner from "../calculateWinner";

const GameContext = createContext();

const GameContextProvider = ({ children }) => {
    const [gridSize, setGridSize] = useState(3);
    const [players, setPlayers] = useState(["X", "O"]);
    const [history, setHistory] = useState([Array(Math.pow(gridSize, 2)).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [playerIndex, setPlayerIndex] = useState(0);
    const [showHistory, setShowHistory] = useState(false);
  
    const squares = history[stepNumber];
    const winner = calculateWinner(squares);
    const nextPlayer = players[stepNumber % players.length];
    const boardIsFull = squares.filter(squareValue => squareValue === null).length === 0;
  
    const resetGame = () => {
        setHistory([Array(Math.pow(gridSize, 2)).fill(null)]);
        setStepNumber(0);
        setPlayerIndex(0);

    };

    const changeGridSize = newGridSize => {
        setGridSize(newGridSize);
        resetGame();
    };

    const jumpToStep = step => {
      setStepNumber(step);
      setPlayerIndex(step % players.length);
    };
  
    const handleSquareClick = squareIndex => {
      if (!nextPlayer || winner || boardIsFull || squares[squareIndex]) {
        return;
      }
  
      const newStepNumber = stepNumber + 1;
      jumpToStep(newStepNumber);
  
      let newSquares = [...squares];
      newSquares[squareIndex] = players[playerIndex];
      setHistory(history.slice(0, newStepNumber).concat([newSquares]));
    };
    
    return (
        <GameContext.Provider
            value={{
                gridSize,
                setGridSize: changeGridSize,
                players,
                setPlayers,
                nextPlayer,
                boardIsFull,
                winner,
                squares,
                handleSquareClick,
                stepNumber,
                stepsCount: history.length,
                jumpToStep,
                resetGame,
                showHistory,
                setShowHistory,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};

export { GameContext, GameContextProvider, GameContext as default };
