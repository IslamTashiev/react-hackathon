import React from "react";
import "./style.css";

export const Button = ({ text, defaultClassName }) => {
  return (
    <button className={`btn ${defaultClassName ? defaultClassName : ""}`}>
      {text}
    </button>
  );
};
