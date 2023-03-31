import React from "react";
import Navbar from "../Navbar";
import Board from "../Board";
import MoveHistory from "../MoveHistory";
import { GameContextProvider } from "../GameContext";
import "./styles.css";

export default () => (
  <div className="game">
    <GameContextProvider>
      <Navbar />
      <div className="container">
        <Board />
      </div>
      <MoveHistory />
    </GameContextProvider>
  </div>
);
