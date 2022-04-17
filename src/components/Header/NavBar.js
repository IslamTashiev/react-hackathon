import React, { useState } from "react";
import { CatologDropdown } from "./CatologDropdown";
import { NavMenu } from "./NavMenu";

export const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  //   console.log(showDropdown);

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='navbar__content'>
          <div className='catalog'>
            <div
              onClick={() => setShowDropdown(!showDropdown)}
              className='catalog__btn'>
              <svg
                width='32'
                height='32'
                viewBox='0 0 32 32'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M5 17C5.55228 17 6 16.5523 6 16C6 15.4477 5.55228 15 5 15C4.44772 15 4 15.4477 4 16C4 16.5523 4.44772 17 5 17Z'
                  fill='white'
                />
                <path
                  d='M26.7243 15H10.2757C9.57116 15 9 15.4209 9 15.94V16.06C9 16.5791 9.57116 17 10.2757 17H26.7243C27.4288 17 28 16.5791 28 16.06V15.94C28 15.4209 27.4288 15 26.7243 15Z'
                  fill='white'
                />
                <path
                  d='M26.7467 21H5.25333C4.56114 21 4 21.4209 4 21.94V22.06C4 22.5791 4.56114 23 5.25333 23H26.7467C27.4389 23 28 22.5791 28 22.06V21.94C28 21.4209 27.4389 21 26.7467 21Z'
                  fill='white'
                />
                <path
                  d='M26.7467 9H5.25333C4.56114 9 4 9.42085 4 9.94V10.06C4 10.5791 4.56114 11 5.25333 11H26.7467C27.4389 11 28 10.5791 28 10.06V9.94C28 9.42085 27.4389 9 26.7467 9Z'
                  fill='white'
                />
              </svg>
              Каталог товаров
            </div>
            <CatologDropdown isActive={showDropdown} />
          </div>
          <NavMenu />
        </div>
      </div>
    </div>
  );
};
