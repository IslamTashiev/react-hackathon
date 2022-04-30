import React from "react";
import homeIcon from "../../assets/images/home.svg";
import menuiconIcon from "../../assets/images/menu-icon.svg";
import cartwhiteIcon from "../../assets/images/cart-white.svg";
import searchIcon from "../../assets/images/search-icon-white.svg";
import moreIcon from "../../assets/images/more-icon.svg";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const MenuBar = ({
  handleChangeSearchModal,
  handleChangeModalDropdown,
  handleChangeMoreModal,
}) => {
  const handleGoHome = () => {
    navigate("/");
  };
  const handleGoToCart = () => {
    navigate("/card");
  };

  const menuItems = [
    {
      title: "Главная",
      imageURL: homeIcon,
      activateFunction: handleGoHome,
    },
    {
      title: "Каталог",
      imageURL: menuiconIcon,
      activateFunction: handleChangeModalDropdown,
    },
    {
      title: "Корзина",
      imageURL: cartwhiteIcon,
      activateFunction: handleGoToCart,
    },
    {
      title: "Поиск",
      imageURL: searchIcon,
      activateFunction: handleChangeSearchModal,
    },
    {
      title: "Ещё",
      imageURL: moreIcon,
      activateFunction: handleChangeMoreModal,
    },
  ];

  const navigate = useNavigate();

  const renderedMenuItems = menuItems.map((item) => (
    <div
      onClick={item.activateFunction}
      key={item.title}
      className='content__item'>
      <img src={item.imageURL} />
      <div className='item__title'>{item.title}</div>
    </div>
  ));

  return (
    <div className='menu__bar'>
      <div className='menu__bar-content'>{renderedMenuItems}</div>
    </div>
  );
};
