import React from "react";

export const NavMenu = () => {
  const navItems = [
    {
      title: "О компании",
      path: "/",
    },
    {
      title: "Акции",
      path: "/",
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
      path: "/",
    },
  ];

  const renderedItem = navItems.map((item) => {
    return (
      <li key={item.title} className='nav__menu-item'>
        {item.title}
      </li>
    );
  });

  return <ul className='nav__menu'>{renderedItem}</ul>;
};