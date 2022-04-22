import React, { useState } from "react";
import { CatologDropdown } from "./CatologDropdown";
import { NavMenu } from "./NavMenu";
import menuiconIcon from "../../assets/images/menu-icon.svg";

export const NavBar = ({ handleChangeCatalog, isActive }) => {
  // const [showDropdown, setShowDropdown] = useState(false);
  //   console.log(showDropdown);

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='navbar__content'>
          <div className='catalog'>
            <div onClick={handleChangeCatalog} className='catalog__btn'>
              <img src={menuiconIcon} />
              <p>Каталог товаров</p>
            </div>
            <CatologDropdown isActive={isActive} />
          </div>
          <NavMenu />
        </div>
      </div>
    </div>
  );
};
