import React, { useState } from "react";
import Arrow from "../../assets/images/arrow.svg";

const ItemFive = () => {
  const [open, setOpen] = useState(false);

  const handleOpenDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className="sort-bar__item">
      <div onClick={handleOpenDropdown} className="sort-bar__type">
        <div className="sort-bar__name">Мощность двигателя (Ватт)</div>
        <img
          src={Arrow}
          className={`sort-bar__image ${open ? "sort-bar__image-active" : ""}`}
        />
      </div>
      <div
        className={`sort-bar-input ${open ? "srt-bar-input-dis-active" : ""}`}
      >
        <div className="sort-bar-checkbox">
          <div className="checkbox">
            <input
              className="checkbox__input"
              type="checkbox"
              id="checkbox_18"
            />
            <label className="checkbox__label" htmlFor="checkbox_18">
              {" "}
              Есть
              <span className="checkbox__sort-bar">(78)</span>
            </label>
          </div>
        </div>

        <div className="sort-bar-checkbox">
          <div className="checkbox">
            <input
              className="checkbox__input"
              type="checkbox"
              id="checkbox_19"
            />
            <label className="checkbox__label" htmlFor="checkbox_19">
              {" "}
              Нет
              <span className="checkbox__sort-bar">(164)</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemFive;
