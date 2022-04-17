import React from "react";
import NextBtn from "../Card/Next-btn";
import EditBtn from "../Card/EditBtn";

import "./recipient.css";

const Recipient = () => {
  const [showRecipient, setShowRecipient] = React.useState(false);

  const closeBlock = () => {
    setShowRecipient(!showRecipient);
  };

  return (
    <div className="recipient">
      <h2>Получатель</h2>
      {showRecipient ? (
        <>
          <div class="ui form">
            <div class="two fields">
              <div class="field">
                <label>Имя</label>
                <input placeholder="Имя" readonly="" type="text" />
              </div>
              <div class="field">
                <label>Фамилия</label>
                <input placeholder="Фамилия" readonly="" type="text" />
              </div>
            </div>
            <div class="inline fields">
              <div class="field">
                <label>Номер телефона</label>
                <input type="number" placeholder="(xxx)" />
              </div>
              <div class="field">
                <label>Эл. почта</label>
                <input type="email" placeholder="joe@schmoe.com" />
              </div>
            </div>
            <NextBtn />
            <div className="checkbox-box">
              <input type="checkbox" name="example" />
              <label>Не перезванивать мне для подтверждения заказа</label>
            </div>
          </div>
        </>
      ) : (
        <div onClick={closeBlock}>
          <EditBtn />
          asdsad
        </div>
      )}
    </div>
  );
};

export default Recipient;
