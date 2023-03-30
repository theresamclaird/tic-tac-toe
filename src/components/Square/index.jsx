import React, { useContext, useState } from "react";
import GameContext from "../GameContext";
import "./styles.css";

export default ({ value, onClick }) => {
  const [preMark, setPreMark] = useState("");
  const { nextPlayer, winner } = useContext(GameContext);

  const handleMouseEnter = () => {
    if (!value && !winner) {
      setPreMark(nextPlayer);
    }
  };

  const handleMouseLeave = () => {
    setPreMark("");
  };

  const handleClick = () => {
    setPreMark("");
    onClick();
  };

  return (
    <button
      className={preMark ? "square pre-mark" : "square"}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {value || preMark}
    </button>
  );
};
