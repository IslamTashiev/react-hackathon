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
              id="checkbox_44"
            />
            <label className="checkbox__label" htmlFor="checkbox_44">
              {" "}
              2100
              <span className="checkbox__sort-bar">(2)</span>
            </label>
          </div>
        </div>
        <div className="sort-bar-checkbox">
          <div className="checkbox">
            <input
              className="checkbox__input"
              type="checkbox"
              id="checkbox_43"
            />
            <label className="checkbox__label" htmlFor="checkbox_43">
              {" "}
              500
              <span className="checkbox__sort-bar">(10)</span>
            </label>
          </div>
        </div>
        <div className="sort-bar-checkbox">
          <div className="checkbox">
            <input
              className="checkbox__input"
              type="checkbox"
              id="checkbox_42"
            />
            <label className="checkbox__label" htmlFor="checkbox_42">
              {" "}
              350
              <span className="checkbox__sort-bar">(5)</span>
            </label>
          </div>
        </div>
        <div className="sort-bar-checkbox">
          <div className="checkbox">
            <input
              className="checkbox__input"
              type="checkbox"
              id="checkbox_41"
            />
            <label className="checkbox__label" htmlFor="checkbox_41">
              {" "}
              300
              <span className="checkbox__sort-bar">(3)</span>
            </label>
          </div>
        </div>
        <div className="sort-bar-checkbox">
          <div className="checkbox">
            <input
              className="checkbox__input"
              type="checkbox"
              id="checkbox_40"
            />
            <label className="checkbox__label" htmlFor="checkbox_40">
              {" "}
              250
              <span className="checkbox__sort-bar">(6)</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemFive;
