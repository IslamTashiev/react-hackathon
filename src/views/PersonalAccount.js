import React from "react";
import Account from "../components/PersonalAccount/Account";
import AccountSideBar from "../components/PersonalAccount/AccountSideBar";

const items = [
  {
    id: 1,
    content: "Общие сведения",
  },
  {
    id: 2,
    content: "Личные данные",
  },
  {
    id: 3,
    content: "История покупок",
  },
  {
    id: 4,
    content: "Избранное",
  },
  {
    id: 5,
    content: "Сменить пароль",
  },
];



const PersonalAccount = () => {
  return (
    <div className="container">
      <h1>Общие сведения</h1>
      <div className="personal-account">
        <AccountSideBar items={items} />
        <Account />
      </div>
    </div>
  );
};

export default PersonalAccount;
