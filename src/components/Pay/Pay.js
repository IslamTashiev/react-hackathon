import React from "react";
import NextBtn from "../Card/Next-btn";
import EditBtn from "../Card/EditBtn.js"

import "./pay.css";

const Pay = () => {
  const [showPay, setShowPay] = React.useState(false);

  const closeBlock = () => {
    setShowPay(!showPay);
  };
  return (
    <>
      <div className="pay">
        <h2>Способ оплаты</h2>
        {showPay ? (
          <>
            <select name="skills" multiple="" className="ui fluid dropdown">
              <option value="">Наличными</option>
              <option value="angular">Картой</option>
            </select>
            <NextBtn />
          </>
        ) : (
          <div onClick={closeBlock}>
              <EditBtn />
              Нажми сюда
          </div>
        )}
      </div>
    </>
  );
};

export default Pay;
