import React from "react";
import closeIcon from "../../assets/images/close-icon.svg";
import "./style.css";
export const SearchModalBar = ({ isActive, handleChangeModal }) => {
  return (
    <div
      // onClick={handleChangeModal}
      className={`search__window modal__window ${isActive ? "active" : ""}`}>
      <div className='search__bar'>
        <div className='search__bar-content container'>
          <input
            placeholder='Введите запрос, например «Smart balance»'
            type='text'
          />
          <div className='search__bar-header'>
            <p>Поиск</p>
            <img
              className='close-icon'
              onClick={handleChangeModal}
              src={closeIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
