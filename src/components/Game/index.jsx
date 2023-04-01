import React from "react";
import Navbar from "../Navbar";
import Board from "../Board";
import MoveHistory from "../MoveHistory";
import { GameContextProvider } from "../GameContext";

export default () => (
  <GameContextProvider>
    <Navbar />
    <Board />
    <MoveHistory />
  </GameContextProvider>
);
