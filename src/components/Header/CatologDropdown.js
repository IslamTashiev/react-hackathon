import React from "react";
import menuIcon0 from "../../assets/images/catalog-icons/menu-0.svg";
import menuIcon1 from "../../assets/images/catalog-icons/menu-1.svg";
import menuIcon2 from "../../assets/images/catalog-icons/menu-2.svg";
import menuIcon3 from "../../assets/images/catalog-icons/menu-3.svg";
import menuIcon4 from "../../assets/images/catalog-icons/menu-4.svg";
import menuIcon5 from "../../assets/images/catalog-icons/menu-5.svg";
import menuIcon6 from "../../assets/images/catalog-icons/menu-6.svg";
import menuIcon7 from "../../assets/images/catalog-icons/menu-7.svg";
import menuIcon8 from "../../assets/images/catalog-icons/menu-8.svg";
import menuIcon9 from "../../assets/images/catalog-icons/menu-9.svg";
import menuIcon10 from "../../assets/images/catalog-icons/menu-10.svg";

export const CatologDropdown = ({ isActive }) => {
  const catalogItems = [
    {
      title: "Гироскутеры",
      img: menuIcon0,
    },
    {
      title: "Электросамокаты",
      img: menuIcon1,
    },
    {
      title: "Моноколеса",
      img: menuIcon2,
    },
    {
      title: "Сигвеи и мини-сигвеи",
      img: menuIcon3,
    },
    {
      title: "Электроскутеры",
      img: menuIcon4,
    },
    {
      title: "Электровелосипеды",
      img: menuIcon5,
    },
    {
      title: "Электроскейты",
      img: menuIcon6,
    },
    {
      title: "Электромобили",
      img: menuIcon7,
    },
    {
      title: "Аксессуары",
      img: menuIcon8,
    },
    {
      title: "Умные игрушки",
      img: menuIcon9,
    },
    {
      title: "Smart Watch",
      img: menuIcon10,
    },
  ];

  const renderedItem = catalogItems.map((item) => {
    return (
      <div key={item.title} className='dropdown__item'>
        <img src={item.img} />
        <div className='catalog__item-title'>{item.title}</div>
      </div>
    );
  });
  console.log(isActive);

  return (
    <div className={`catalog__dropdown ${!isActive ? "active" : ""}`}>
      {renderedItem}
    </div>
  );
};
