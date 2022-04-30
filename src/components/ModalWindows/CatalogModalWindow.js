import React from "react";
import closeIcon from "../../assets/images/close-icon.svg";
import { CatologDropdown } from "../Header/CatologDropdown";

export const CatalogModalWindow = ({ isActive, handleChangeModalDropdown }) => {
  return (
    <div
      className={`catalog__window modal__window ${isActive ? "active" : ""}`}>
      <div className='catalog__window-content'>
        <div className='catalog__window-header'>
          <p>Каталог</p>
          <img onClick={handleChangeModalDropdown} src={closeIcon} />
        </div>
        <div>
          <CatologDropdown isActive={isActive} />
        </div>
      </div>
    </div>
  );
};
