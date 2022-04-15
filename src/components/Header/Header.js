import React from "react";
import logoIcon from "../../assets/images/logo.svg";
import searchIcon from "../../assets/images/search-icon.svg";
import compareIcon from "../../assets/images/compare.svg";
import cartIcon from "../../assets/images/cart.svg";
import eyeIcon from "../../assets/images/eye.svg";
import hearthIcon from "../../assets/images/hearth.svg";
import { Button } from "../Buttons/Button";
import "./style.css";

export const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header__content'>
          <div className='header__logo'>
            <img src={logoIcon} />
          </div>
          <div className='header__info'>
            <div className='header__info-contacts'>
              <ul className='contacts'>
                <li className='contact__item'>+7 (812) 660-50-54</li>
                <li className='contact__item'>+7 (958) 111-95-03</li>
                <li className='contact__item light'>Пн-вс: с 10:00 до 21:00</li>
              </ul>
              <div className='search__btn'>
                <img src={searchIcon} />
                Поиск
              </div>
            </div>
            <div className='header__menu'>
              <img src={eyeIcon} />
              <img src={hearthIcon} />
              <img src={compareIcon} />
              <img src={cartIcon} />
              <Button defaultClassName='header__btn' text='Войти' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
