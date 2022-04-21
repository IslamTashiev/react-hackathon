import React from "react";
import UrOrder from "./UrOrder";
import Receiving from "../Receiving/Receiving";

import "./card.css";

const card = () => {
  return (
    <div className="card">
      <UrOrder />
      <Receiving />
    </div>
  );
};

export default card;
