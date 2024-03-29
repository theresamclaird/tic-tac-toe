import React, { useContext } from "react";
import { GameContext } from "../GameContext";
import Square from "../Square";
import "./styles.css";

export default () => {
  const { gridSize, squares, handleSquareClick, resetGame, stepNumber } = useContext(GameContext);
  const renderSquare = (squareIndex) => (
    <Square
      key={squareIndex}
      value={squares[squareIndex]}
      onClick={() => handleSquareClick(squareIndex)}
    />
  );

  let rows = [];
  for (let rowIndex = 0; rowIndex < gridSize; rowIndex++) {
    let columns = [];
    for (let columnIndex = 0; columnIndex < gridSize; columnIndex++) {
      columns.push(renderSquare(gridSize * rowIndex + columnIndex));
    }
    rows.push(
      <div className="board-row" key={rowIndex}>
        {columns}
      </div>
    );
  }

  return (
    <div className="game-surface">
      <div className="grid-container">{rows}</div>
      <button className="button" disabled={stepNumber === 0} onClick={() => resetGame()}>Reset</button>
    </div>
  );
};
