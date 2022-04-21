import React, { useState } from "react";
import Arrow from "../../assets/images/arrow.svg";

const ItemFour = () => {
  const [open, setOpen] = useState(false);

  const handleOpenDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className="sort-bar__item">
      <div onClick={handleOpenDropdown} className="sort-bar__type">
        <div className="sort-bar__name">Максимальная скорость (км/ч)</div>
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
              id="checkbox_8"
            />
            <label className="checkbox__label" htmlFor="checkbox_8">
              {" "}
              45
              <span className="checkbox__sort-bar">(2)</span>
            </label>
          </div>
        </div>
        <div className="sort-bar-checkbox">
          <div className="checkbox">
            <input
              className="checkbox__input"
              type="checkbox"
              id="checkbox_9"
            />
            <label className="checkbox__label" htmlFor="checkbox_9">
              {" "}
              32
              <span className="checkbox__sort-bar">(10)</span>
            </label>
          </div>
        </div>
        <div className="sort-bar-checkbox">
          <div className="checkbox">
            <input
              className="checkbox__input"
              type="checkbox"
              id="checkbox_10"
            />
            <label className="checkbox__label" htmlFor="checkbox_10">
              {" "}
              30
              <span className="checkbox__sort-bar">(5)</span>
            </label>
          </div>
        </div>
        <div className="sort-bar-checkbox">
          <div className="checkbox">
            <input
              className="checkbox__input"
              type="checkbox"
              id="checkbox_11"
            />
            <label className="checkbox__label" htmlFor="checkbox_11">
              {" "}
              28
              <span className="checkbox__sort-bar">(3)</span>
            </label>
          </div>
        </div>
        <div className="sort-bar-checkbox">
          <div className="checkbox">
            <input
              className="checkbox__input"
              type="checkbox"
              id="checkbox_12"
            />
            <label className="checkbox__label" htmlFor="checkbox_12">
              {" "}
              25
              <span className="checkbox__sort-bar">(6)</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemFour;
