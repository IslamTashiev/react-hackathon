import React, { useState } from "react";
import SortBar from "./SortBar";
import FilterIcon from "../../assets/images/filter-icon.svg";
import FilterIconBlack from "../../assets/images/filter-icon-black.svg";
import CloseIcon from "../../assets/images/close-icon.svg";
import Arrow from "../../assets/images/arrow.svg";
import "./style.css";
import CatalogDropdown from "./CatalogDropdown";
import { ProductList } from "./ProductList";

const options = [
  {
    id: 1,
    label: "Сначала дорогие",
  },
  {
    id: 2,
    label: "Сначала дешевые",
  },
];

const Catalog = () => {
  const [open, setOpen] = useState(false);

  const handleOpenDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className="catalog__top">
      <div className="container">
        <div className="catalog__title">Каталог</div>
        <div className="catalog__content">
          <div
            className={`catalog__filter ${
              open ? "catalog__filter-active" : ""
            }`}
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
                <div className={`div ${open ? "div-active" : ""}`}>
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
                  </div>
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
          <div className="catalog-dropdown">
            <CatalogDropdown options={options} />
          </div>
        </div>
        <div className="catalog__card">
          <div className="catalog__sort-bar">
            <SortBar />
          </div>
          <div className="catalog__product-list">
            <div className="catalog-drop">
              <CatalogDropdown options={options} />
            </div>
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
