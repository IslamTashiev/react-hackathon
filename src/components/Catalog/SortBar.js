import React from "react";
import ItemFour from "./ItemFour";
import ItemOne from "./ItemOne";
import ItemThree from "./ItemThree";
import ItemTwo from "./ItemTwo";
import "./style.css";

const SortBar = () => {
  return (
    <div className="sort-bar">
      <div className="sort-bar__row">
        <ItemOne />
        <ItemTwo />
        <ItemThree />
        <ItemFour />
      </div>
    </div>
  );
};

export default SortBar;
