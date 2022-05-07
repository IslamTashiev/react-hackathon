import React from "react";
import { useNavigate } from "react-router-dom";
import addIcon from "../../assets/images/plus.svg";
import { ButtonImg } from "../Buttons/ButtonImg";

export const AdminAddButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/admin/create/product");
  };

  return (
    <div className='admin__buttons add'>
      <div onClick={handleClick}>
        <ButtonImg image={addIcon} defaultClassName='abs' />
      </div>
      <div onClick={handleClick}>
        <ButtonImg image={addIcon} defaultClassName='abs' />
      </div>
    </div>
  );
};
