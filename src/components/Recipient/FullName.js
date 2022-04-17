import React from "react";

const FullName = () => {
  return (
    <div class="full-name-content">
      <div className="full-name">
        <label>Имя</label>
        <input className="full-name-input" placeholder="Имя" type="text" />
      </div>
      <div className="full-name">
        <label>Фамилия</label>
        <input className="full-name-input" placeholder="Фамилия" type="text" />
      </div>
    </div>
  );
};

export default FullName;
