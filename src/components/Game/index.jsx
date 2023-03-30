import React, { useState, useEffect } from "react";
import Board from "../Board";
import GameStatus from "../GameStatus";
import MoveHistory from "../MoveHistory";
import GameContext from "../GameContext";
import calculateWinner from "../calculateWinner";
import "./styles.css";

export default ({ gridSize = 3, players = ["X", "O"] }) => {
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
    <div className="game">
      <GameContext.Provider value={{ nextPlayer, boardIsFull, winner }}>
        <div>
          <GameStatus />
          <Board
            squares={currentSquares}
            handleSquareClick={handleSquareClick}
          />
        </div>
        <MoveHistory stepsCount={history.length} jumpToStep={jumpToStep} />
      </GameContext.Provider>
    </div>
  );
};
