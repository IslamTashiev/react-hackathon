import React from "react";

const Gmail = () => {
  return (
    <div className="gmail">
      <div className="gmail-content">
        <label>Номер телефона</label>
        <input
          className="full-name-input"
          placeholder="+7 (9__) ___-__-__"
          type="text"
        />
      </div>
      <div className="gmail-content">
        <label>Эл. почта</label>
        <input
          className="full-name-input"
          placeholder="Например,  smart@gmail.com"
          type="text"
        />
      </div>
    </div>
  );
};

export default Gmail;
