import React from "react";
import "./styles.css";

export default ({ stepsCount, jumpToStep }) => {
  let stepLinks = [];
  for (let stepIndex = 0; stepIndex < stepsCount; stepIndex++) {
    const desc = stepIndex ? "Go to step #" + stepIndex : "Game Start";
    stepLinks.push(
      <li className="history-step" key={stepIndex}>
        <button
          className="history-button"
          onClick={() => jumpToStep(stepIndex)}
        >
          {desc}
        </button>
      </li>
    );
  }

  return (
    <div className="move-history">
      <h1>Steps:</h1>
      <ol>{stepLinks}</ol>
    </div>
  );
};
