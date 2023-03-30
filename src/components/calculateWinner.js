const getWinningRows = (gridSize) => {
  let winningRows = [];
  let squareIndex = 0;
  for (let i = 0; i < gridSize; i++) {
    let row = [];
    for (let j = 0; j < gridSize; j++) {
      row.push(squareIndex);
      squareIndex++;
    }
    winningRows.push(row);
  }
  return winningRows;
};

const getWinningColumns = (gridSize) => {
  let winningColumns = [];
  for (let i = 0; i < gridSize; i++) {
    let column = [];
    for (let j = i; j < Math.pow(gridSize, 2); j += gridSize) {
      column.push(j);
    }
    winningColumns.push(column);
  }
  return winningColumns;
};

const getFirstWinningDiagonal = (gridSize) => {
  let winningDiagonal = [];
  for (let i = 0; i < Math.pow(gridSize, 2); i += gridSize + 1) {
    winningDiagonal.push(i);
  }
  return winningDiagonal;
};

const getSecondWinningDiagonal = (gridSize) => {
  let winningDiagonal = [];
  for (
    let i = gridSize - 1;
    i <= Math.pow(gridSize, 2) - gridSize;
    i += gridSize - 1
  ) {
    winningDiagonal.push(i);
  }
  return winningDiagonal;
};

const getWinningLines = (gridSize) => {
  let winningLines = []
    .concat(getWinningRows(gridSize))
    .concat(getWinningColumns(gridSize));

  winningLines.push(getFirstWinningDiagonal(gridSize));
  winningLines.push(getSecondWinningDiagonal(gridSize));

  return winningLines;
};

const calculateWinner = (squares) => {
  const gridSize = Math.sqrt(squares.length);
  const winningLines = getWinningLines(gridSize);

  for (let i = 0; i < winningLines.length; i++) {
    const winningLine = winningLines[i];
    const firstValue = squares[winningLine[0]];
    if (firstValue) {
      let check = false;
      for (let j = 1; j < gridSize; j++) {
        check = firstValue === squares[winningLine[j]];
        if (!check) {
          break;
        }
      }
      if (check) {
        return firstValue;
      }
    }
  }
  return null;
};

export default calculateWinner;
