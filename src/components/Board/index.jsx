import React from "react";
import Square from "../Square";
import "./styles.css";

export default ({ squares, handleSquareClick }) => {
  const renderSquare = (squareIndex) => (
    <Square
      key={squareIndex}
      value={squares[squareIndex]}
      onClick={() => handleSquareClick(squareIndex)}
    />
  );

  let rows = [];
  const gridSize = Math.sqrt(squares.length);
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

  return <div className="board-container">{rows}</div>;
};
