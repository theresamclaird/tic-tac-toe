import React, { useContext } from "react";
import GameContext from "../GameContext";
import "./styles.css";

export default () => {
  const { winner, boardIsFull, nextPlayer } = useContext(GameContext);

  const status = () => {
    if (winner) {
      return "Winner: " + winner;
    }

    if (boardIsFull) {
      return "Draw";
    }

    return `Next player: ${nextPlayer}`;
  };

  return <h1 className="game-info">{status()}</h1>;
};
