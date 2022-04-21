import React from "react";

const Lacation = () => {
  return (
    <div className="location">
      <div className="location-content">
        <label>Ваш город</label>
        <select className="location-dropdown">
          <option value="">Выбрать</option>
          <option value="">Санкт-Петербург</option>
          <option value="">Моска</option>
          <option value="">Нур-Султан</option>
          <option value="">Астна</option>
          <option value="">Бишкек</option>
          <option value="">Иссык-Куль</option>
        </select>
      </div>
      <div className="delivery">
        <div className="delivery-content">
          <label>Вид доставки</label>
          <select className="location-dropdown">
            <option value="">Выбрать</option>
            <option value="">Досвка</option>
            <option value="">Самовызов</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Lacation;
