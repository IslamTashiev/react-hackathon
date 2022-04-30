import React from "react";
import { Link } from "react-router-dom";

export const NavMenu = () => {
  const navItems = [
    {
      title: "О компании",
      path: "/about",
    },
    {
      title: "Акции",
      path: "/promo",
    },
    {
      title: "Рассрочка 0|0|18",
      path: "/",
    },
    {
      title: "Сервис и гарантия",
      path: "/",
    },
    {
      title: "Опт/дропшиппинг",
      path: "/",
    },
    {
      title: "Контакты",
      path: "/contact",
    },
  ];

  const renderedItem = navItems.map((item) => {
    return (
      <li key={item.title} className='nav__menu-item'>
        <Link to={item.path}>{item.title}</Link>
      </li>
    );
  });

  return <ul className='nav__menu'>{renderedItem}</ul>;
};
