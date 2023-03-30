import React from "react";
import ReactDOM from "react-dom";
import Game from "./components/Game";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Game gridSize={2} />
    <Game gridSize={4} />
    <Game players={["🙅‍♂️", "🙆‍♀️"]} />
    <Game gridSize={9} players={["🧑‍🌾", "🧑‍🔧", "🧑‍🔬"]} />
  </React.StrictMode>,
  rootElement
);
