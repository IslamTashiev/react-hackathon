import React, { useState } from "react";
import SortBar from "./SortBar";
import FilterIcon from "../../assets/images/filter-icon.svg";
import FilterIconBlack from "../../assets/images/filter-icon-black.svg";
import CloseIcon from "../../assets/images/close-icon.svg";
import Arrow from "../../assets/images/arrow.svg";
import "./style.css";

const Catalog = () => {
  const [open, setOpen] = useState(false);

  const handleOpenDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className="catalog__top">
      <div className="container">
        <ul className="ul">
          <li className="li">
            Главная <img src={Arrow} />
          </li>
          <li className="li">
            Каталог <img src={Arrow} />
          </li>
          <span>Сигвеи и мини-сигвеи</span>
        </ul>
        <div className="catalog__title">Каталог</div>
        <div
          className={`catalog__filter ${open ? "catalog__filter-active" : ""}`}
        >
          <div
            className={`catalog__content ${
              open ? "catalog__content-active" : ""
            }`}
          >
            <div
              onClick={handleOpenDropdown}
              className={`catalog__filter-button ${
                open ? "catalog__filter-button-active" : ""
              }`}
            >
              <div>
                <img
                  className={`catalog__filter-button-img ${
                    open ? "catalog__filter-button-img-active" : ""
                  }`}
                  src={FilterIcon}
                />
                <img
                  className={`catalog__filter-button-img-black ${
                    open ? "catalog__filter-button-img-black-active" : ""
                  }`}
                  src={FilterIconBlack}
                />
                Фильтры
                <img
                  className={`catalog__filter-close-icon ${
                    open ? "catalog__filter-close-icon-active" : ""
                  }`}
                  src={CloseIcon}
                />
              </div>
            </div>
            <div
              className={`sort-bar-input ${
                open ? "srt-bar-input-dis-active" : ""
              }`}
            >
              <div className={`sort-bar ${open ? "sort-bar-active" : ""}`}>
                <SortBar />
              </div>
            </div>
          </div>
        </div>
        <div className="catalog__sort-bar">
          <SortBar />
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
