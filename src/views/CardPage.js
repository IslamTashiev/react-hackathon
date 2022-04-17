import React from "react";
import { Header } from "../components/Header/Header";
import Card from "../components/Card/Card";
import CardSideBar from "../components/CardSideBar/CardSideBar";

const CardPage = () => {
  return (
    <div className="container">
      <Header />
      <div className="cardpage">
        <h1>Оформление заказа</h1>
      </div>
      <div className="CardPage">
        <Card />
        <CardSideBar />
      </div>
    </div>
  );
};

export default CardPage;
