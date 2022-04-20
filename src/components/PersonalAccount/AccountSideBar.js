import React from "react";

import "./account.css";
import Items from "./Items";

const AccountSidebar = ({ items }) => {
  return (
    <div className="account-sidebar">
      <Items items={items} />
      <div className="leave">
        <button className="leave-bnt">
          <span>Выйти</span>
        </button>
      </div>
    </div>
  );
};

export default AccountSidebar;
