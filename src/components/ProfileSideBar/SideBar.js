import React from "react";
import "./ProfileSideBar.css";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";

const SideBar = ({ defaultClass }) => {
  const profileList = [
    {
      title: "Общие сведения",
      id: 1,
    },
    {
      title: "Личные данные",
      id: 2,
    },
    {
      title: "История покупок",
      id: 3,
    },
    {
      title: "Избранное",
      id: 4,
    },
    {
      title: "Сменить пароль",
      id: 5,
    },
  ];

  const handleLOgout = async () => {
    signOut(auth)
      .then(() => {
        console.log("Loged out");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const renderedProfileList = profileList.map((profileLis) => {
    return (
      <li key={profileLis.id}>
        <a href='#'>{profileLis.title}</a>
      </li>
    );
  });

  return (
    <>
      <div className={`profileList ${defaultClass ? defaultClass : ""}`}>
        <ul className='profileList__items'>
          {renderedProfileList}
          <li onClick={handleLOgout}>
            <div>Выйти</div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
