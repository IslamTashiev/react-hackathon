import React from "react";
import closeIcon from "../../assets/images/close-icon.svg";
import { HeaderIcons } from "../Header/HeaderIcons";
import { NavMenu } from "../Header/NavMenu";
import "./style.css";

export const MoreModalWindow = ({ isActive, handleChangeMoreModal }) => {
  return (
    <div className={`more__window modal__window ${isActive ? "active" : ""}`}>
      <div className='more__window-content'>
        <div className='content__header'>
          <p>Ещё</p>
          <img onClick={handleChangeMoreModal} src={closeIcon} />
        </div>
        <div className='more__icons'>
          <HeaderIcons />
        </div>
        <NavMenu />
      </div>
    </div>
  );
};
