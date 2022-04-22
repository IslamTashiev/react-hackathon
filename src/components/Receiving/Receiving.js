import React from "react";
import Location from "./Lacation";
import NextBtn from "../Card/Next-btn";
import Date from "./Date";
import Address from "./Address";
import Comment from "./Comment";
import EditBtn from "../Card/EditBtn";

import "./receiving.css";

// const citys = [
//   {
//     id: 0,
//     city: "Выбрать",
//   },
//   {
//     id: 2,
//     city: "Санкт-Петербург",
//   },
//   {
//     id: 3,
//     city: "Моска",
//   },
//   {
//     id: 4,
//     city: "Нур-Султан",
//   },
//   {
//     id: 5,
//     city: "Астaна",
//   },
//   {
//     id: 6,
//     city: "Бишкек",
//   },
//   {
//     id: 7,
//     city: "Иссык-Куль",
//   },
// ];

// const orders = [
//   {
//     id: 0,
//     order: "Выбрать",
//   },
//   {
//     id: 2,
//     order: "Доставкаг",
//   },
//   {
//     id: 3,
//     order: "Самовызов",
//   },
// ];

const Receiving = () => {
  const [showReceiving, setShowReceiving] = React.useState(false);

  const closeBlock = () => {
    setShowReceiving(!showReceiving);
  };

  return (
    <form className="receiving-from">
      <h2>Способ получения</h2>
      {showReceiving ? (
        <>
          <Location/>
          <div className="receiving-for-form">
            <Date />
            <Address />
          </div>
          <Comment />
          <NextBtn />
        </>
      ) : (
        <div onClick={closeBlock}>
          <EditBtn />
        </div>
      )}
    </form>
  );
};

export default Receiving;
