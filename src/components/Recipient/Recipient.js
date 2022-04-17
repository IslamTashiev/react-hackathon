import React from "react";
import NextBtn from "../Card/Next-btn";
import EditBtn from "../Card/EditBtn";

import "./recipient.css";
import FullName from "./FullName";
import Gmail from "./Gmail";
import RecipientCheckbox from "./RecipientCheckbox";

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
          <FullName />
          <Gmail />
          <RecipientCheckbox />
        </>
      ) : (
        <div onClick={closeBlock}>
          <EditBtn />
        </div>
      )}
    </div>
  );
};

export default Recipient;
