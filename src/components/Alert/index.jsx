import React from "react";
import "./styles.css";

export default ({ title, description }) => (
  <div className="alert">
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
);
