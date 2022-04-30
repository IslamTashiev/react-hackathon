import React from "react";
import { useNavigate } from "react-router-dom";
import addIcon from "../../assets/images/plus.svg";
import { ButtonImg } from "../Buttons/ButtonImg";

export const AdminAddButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/create/product");
  };

  return (
    <div onClick={handleClick}>
      <ButtonImg image={addIcon} defaultClassName='abs' />
    </div>
  );
};
