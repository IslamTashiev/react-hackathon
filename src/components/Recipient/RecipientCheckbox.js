import React from "react";

const RecipientCheckbox = () => {
  return (
    <div className="recipient-checkbox">
      <input className="recipient-input" type="checkbox" />
      <label>Не перезванивать мне для подтверждения заказа</label>
    </div>
  );
};

export default RecipientCheckbox;
