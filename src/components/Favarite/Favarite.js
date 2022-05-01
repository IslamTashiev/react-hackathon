import React from "react";
import FavariteItem from "./FavariteItem";
import PriceDropdown from "./PriceDropdown";
import Dropdwn from "./ProductsDropdwn";

import "./style.css";

const allProducts = [
  {
    title: "Гироскутеры",
    id: 1,
  },
  {
    title: "Электросамокаты",
    id: 2,
  },
  {
    title: "Моноколеса",
    id: 3,
  },
  {
    title: "Сигвеи и мини-сигвеи",
    id: 4,
  },
  {
    title: "Электроскутеры",
    id: 5,
  },
  {
    title: "Электровелосипеды",
    id: 6,
  },
  {
    title: "Электроскейты",
    id: 7,
  },
  {
    title: "Электромобили",
    id: 8,
  },
  {
    title: "Аксессуары",
    id: 9,
  },
  {
    title: "Умные игрушки",
    id: 10,
  },
  {
    title: "Smart Watch",

    id: 11,
  },
];

const filterPrice = [
  {
    id: 1,
    title: "Средние",
  },
  {
    id: 2,
    title: "Дешевые",
  },
];

// const items = [
//   {
//     sales: "Хит продаж",
//     img: "",
//     category: 1,
//     title: "asdasdasdasdsad",
//     comment: 17,
//     price: 8000,
//     id: 1,
//   },
//   {
//     sales: "Хит продаж",
//     img: "",
//     category: 2,
//     title: "asdasdasdasdsad",
//     comment: 17,
//     price: 8000,
//     id: 2,
//   },
//   {
//     sales: "Хит продаж",
//     img: "",
//     category: 2,
//     title: "asdasdasdasdsad",
//     comment: 17,
//     price: 8000,
//     id: 3,
//   },
//   {
//     sales: "Хит продаж",
//     img: "",
//     category: 2,
//     title: "asdasdasdasdsad",
//     comment: 17,
//     price: 8000,
//     id: 4,
//   },
// ];

const Favarite = () => {
  return (
    <div className="container">
      <h1>Избранное</h1>
      <div className="favarite">
        <div className="dropDown">
          <Dropdwn text="Все товары" allProducts={allProducts} />
          <PriceDropdown text="Сначала дорогие" filterPrice={filterPrice} />
        </div>
        <div className="favarite-item">
          <FavariteItem />
          <FavariteItem />
          <FavariteItem />
          <FavariteItem />
        </div>
      </div>
    </div>
  );
};

export default Favarite;
