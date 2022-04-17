import React from "react";
import AirDatepicker from "air-datepicker";

const Date = () => {
  return (
    <div className="data">
      <div className="data-content">
        <span>Дата</span>
        <input className="data-input" type="date"></input>
      </div>
      <div className="data-content">
        <span>Дата</span>
        <input className="data-input" type="time"></input>
      </div>
    </div>
  );
};

export default Date;
