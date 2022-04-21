import React, { useState } from "react";
import SortBar from "./SortBar";
import FilterIcon from "../../assets/images/filter-icon.svg";
import "./style.css";

const Catalog = () => {
  const [open, setOpen] = useState(false);

  const handleOpenDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className="catalog__top">
      <div className="container">
        <div className="catalog__title">Каталог</div>
        <div className="catalog__filter">
          <div onClick={handleOpenDropdown} className="catalog__filter-button">
            <div>
              <img className="catalog__filter-button-img" src={FilterIcon} />
              Фильтры
            </div>
          </div>
          <div
            className={`sort-bar-input ${
              open ? "srt-bar-input-dis-active" : ""
            }`}
          >
            <SortBar />
          </div>
        </div>
        <div>
          <SortBar />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
