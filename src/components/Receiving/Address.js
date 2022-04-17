import React from "react";

const Address = () => {
  return (
    <div className="address">
      <div className="address-content">
        <span>Улица, дом/корпус</span>
        <input
          className="address-input"
          placeholder="Ваш адрес"
          type="text"
        ></input>
      </div>
      <div className="address-content">
        <span>Квартира</span>
        <input
          className="address-input"
          placeholder="Номер квартиры"
          type="text"
        ></input>
      </div>
    </div>
  );
};

export default Address;
