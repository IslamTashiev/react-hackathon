import React from "react";
import { ButtonImg } from "../Buttons/ButtonImg";
import { useNavigate } from "react-router-dom";
import addIcon from "../../assets/images/plus.svg";
import promotionIcon from "../../assets/images/promotion.svg";
import newsIcon from "../../assets/images/news.svg";
import productIcon from "../../assets/images/product.svg";

export const AdminAddButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/admin/create/product");
  };

  return (
    <>
      <div className='admin__buttons'>
        <ButtonImg image={addIcon} defaultClassName='abs parrent' />
        <div className='add__buttons'>
          <div onClick={handleClick}>
            <ButtonImg image={productIcon} defaultClassName='' />
          </div>
          <ButtonImg image={promotionIcon} defaultClassName='' />
          <ButtonImg image={newsIcon} defaultClassName='' />
        </div>
      </div>
    </>
  );
};
