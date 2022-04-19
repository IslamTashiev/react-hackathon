import React from "react";
import Account from "../components/PersonalAccount/Account";
import AccountSideBar from "../components/PersonalAccount/AccountSideBar";

const PersonalAccount = () => {
  return (
    <div className="container">
      <h1>Общие сведения</h1>
      <div className="personal-account">
        <AccountSideBar />
        <Account />
      </div>
    </div>
  );
};

export default PersonalAccount;
