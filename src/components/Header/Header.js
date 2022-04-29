import React, { useEffect, useState } from "react";
import logoIcon from "../../assets/images/logo.svg";
import searchIcon from "../../assets/images/search-icon.svg";
import compareIcon from "../../assets/images/compare.svg";
import cartIcon from "../../assets/images/cart.svg";
import eyeIcon from "../../assets/images/eye.svg";
import hearthIcon from "../../assets/images/hearth.svg";
import { Button } from "../Buttons/Button";
import { NavBar } from "./NavBar";
import { SearchModalBar } from "../ModalWindows/SearchModalBar";
import { LoginModalWindow } from "../ModalWindows/LoginModalWindow";
import { Link } from "react-router-dom";
import { MenuBar } from "./MenuBar";
import { CatalogModalWindow } from "../ModalWindows/CatalogModalWindow";
import { MoreModalWindow } from "../ModalWindows/MoreModalWindow";
import { RegisterModal } from "../ModalWindows/RegisterModal";
import { useUser } from "../../hooks/useUser";
import "./style.css";

export const Header = () => {
  const [activeSearchModal, setActiveSearchModal] = useState(false);
  const [activeLoginModal, setActiveLoginModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModalDropdown, setShowModalDropdown] = useState(false);
  const [showMoreModal, setShowMoreModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const user = useUser();

  const handleChangeSearchModal = () => {
    setActiveSearchModal(!activeSearchModal);
  };
  const handleChangeLoginModal = () => {
    setActiveLoginModal(!activeLoginModal);
  };
  const handleChangeCatalog = () => {
    setShowDropdown(!showDropdown);
  };
  const handleChangeModalDropdown = () => {
    setShowModalDropdown(!showModalDropdown);
  };
  const handleChangeMoreModal = () => {
    setShowMoreModal(!showMoreModal);
  };
  const handleChangeRegisterModal = () => {
    setShowRegisterModal(!showRegisterModal);
  };

  return (
    <>
      <div className='header'>
        {/* {user.uid} */}
        <div className='container'>
          <div className='header__content'>
            <div className='header__logo'>
              <Link to='/'>
                <img src={logoIcon} />
              </Link>
            </div>
            <div className='header__info'>
              <div className='header__info-contacts'>
                <ul className='contacts'>
                  <li className='contact__item'>+7 (812) 660-50-54</li>
                  <li className='contact__item'>+7 (958) 111-95-03</li>
                  <li className='contact__item light'>
                    Пн-вс: с 10:00 до 21:00
                  </li>
                </ul>
                <div onClick={handleChangeSearchModal} className='search__btn'>
                  <img src={searchIcon} />
                  Поиск
                </div>
              </div>
              <div className='header__menu'>
                {/* <div> */}
                <img src={eyeIcon} />
                <img src={hearthIcon} />
                <img src={compareIcon} />
                <img src={cartIcon} />
                {/* </div> */}
                {!user ? (
                  <div onClick={handleChangeLoginModal}>
                    <Button defaultClassName='header__btn' text='Войти' />
                  </div>
                ) : (
                  <img className='user__avatar' src={user.photoURL} />
                )}
              </div>
            </div>
          </div>
        </div>
        <NavBar
          handleChangeCatalog={handleChangeCatalog}
          isActive={showDropdown}
        />
      </div>
      <SearchModalBar
        handleChangeModal={handleChangeSearchModal}
        isActive={activeSearchModal}
      />
      <LoginModalWindow
        handleChangeModal={handleChangeLoginModal}
        isActive={activeLoginModal}
        handleChangeRegisterModal={handleChangeRegisterModal}
      />
      <MenuBar
        handleChangeCatalog={handleChangeCatalog}
        handleChangeSearchModal={handleChangeSearchModal}
        handleChangeModalDropdown={handleChangeModalDropdown}
        handleChangeMoreModal={handleChangeMoreModal}
      />
      <CatalogModalWindow
        isActive={showModalDropdown}
        handleChangeModalDropdown={handleChangeModalDropdown}
      />
      <MoreModalWindow
        isActive={showMoreModal}
        handleChangeMoreModal={handleChangeMoreModal}
      />
      <RegisterModal
        isActive={showRegisterModal}
        handleChangeRegisterModal={handleChangeRegisterModal}
        handleChangeModal={handleChangeLoginModal}
      />
    </>
  );
};
