import React from "react";
import ItemOne from "./ItemOne";
import ItemTwo from "./ItemTwo";
import ItemThree from "./ItemThree";
import ItemFour from "./ItemFour";
import ItemFive from "./ItemFive";
import ItemSix from "./ItemSix";
import ItemSeven from "./ItemSeven";
import "./style.css";

const SortBar = () => {
  return (
    <div className="sort-bar">
      <div className="sort-bar__row">
        <ItemOne />
        <ItemTwo />
        <ItemThree />
        <ItemFour />
        <ItemSeven />
        <ItemFive />
        <ItemSix />
      </div>
    </div>
  );
};

export default SortBar;
