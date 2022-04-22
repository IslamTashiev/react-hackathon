import React from "react";

const Lacation = ({}) => {
  return (
    <div className="location">
      <div className="location-content">
        <label>Ваш город</label>
        <select className="location-dropdown">
          <option value="">Выбрать</option>
          <option value="">Санкт-Петербург</option>
          <option value="">Моска</option>
          <option value="">Нур-Султан</option>
          <option value="">Астaна</option>
          <option value="">Бишкек</option>
          <option value="">Иссык-Куль</option>
        </select>
      </div>
      <div className="delivery">
        <div className="delivery-content">
          <label>Вид доставки</label>
          <select className="location-dropdown">
            <option value="">Выбрать</option>
            <option value="">Доставка</option>
            <option value="">Самовызов</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Lacation;

// import React from "react";

// const Lacation = ({ citys, orders }) => {
//   const renderedCity = citys.map((city) => {
//     return (
//       <select className="location-dropdown">
//         <option value="">{city.city}</option>
//         <option value="">{city.city}</option>
//         <option value="">{city.city}</option>
//         <option value="">{city.city}</option>
//         <option value="">{city.city}</option>
//         <option value="">{city.city}</option>
//         <option value="">{city.city}</option>
//       </select>
//     );
//   });

//   const renderedOrder = orders.map((order) => {
//     return (
//       <select className="location-dropdown">
//         <option value="">{order.order}</option>
//         <option value="">{order.order}</option>
//         <option value="">{order.order}</option>
//       </select>
//     );
//   });

//   return (
//     <div className="location">
//       <div className="location-content">
//         <label>Ваш город</label>
//         {renderedCity}
//       </div>
//       <div className="delivery">
//         <div className="delivery-content">
//           <label>Вид доставки</label>
//           {renderedOrder}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Lacation;
