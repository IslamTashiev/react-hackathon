import React from "react";
import Nextbtn from "../Card/Next-btn";
import Item from "./Item";

import "./sidebar.css";

const sibeBars = [
  {
    title: "2",
    price: "28 500",
    content: "Стоимость доставки",
    delivery: "бесплатно",
    subtitle: "К оплате",
    price: "28 500",
  },
];

const CardSideBar = () => {
  return (
    <div className="card-side-bar">
      <Item sibeBars={sibeBars} />
      <buton className="bar-btn">
        <span>Оформить заказ</span>
      </buton>
      <div class="card-checkbox">
        <input className="card-input" type="checkbox" />
        <label>
          Подтверждая заказ, я принимаю условия пользовательского соглашения
        </label>
      </div>
    </div>
  );
};

export default CardSideBar;
