import React, { useState } from "react";
import { Button } from "../Buttons/Button";
import { ButtonImg } from "../Buttons/ButtonImg";
import hearthIcon from "../../assets/images/hearth.svg";
import likeIcon from "../../assets/images/hearth-active.svg";
import compareIcon from "../../assets/images/compare.svg";
import cartIcon from "../../assets/images/cart-white.svg";
import starIcon from "../../assets/images/star.svg";
import commentIcon from "../../assets/images/comment.svg";

import "./style.css";
import { Link } from "react-router-dom";

export const ProductItem = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className='product__item'>
      <img className='item__img' src={product.imageURL} />
      <div className='product__item-category'>Сигвеи</div>
      <Link to={`/product/${product.id}`} className='products__item-title'>
        {product.title}
      </Link>
      <div className='product__item-info'>
        <div className='info__raiting'>
          <img src={starIcon} />
          <img src={starIcon} />
          <img src={starIcon} />
          <img src={starIcon} />
          <img src={starIcon} />
        </div>
        <div className='info__commit'>
          <img src={commentIcon} />
          (17)
        </div>
      </div>
      <div className='product__item-interface'>
        <div className='interface__price'>{product.price} ₽</div>
        <div className='interface__btns'>
          <div onClick={() => setIsLiked(!isLiked)}>
            <ButtonImg
              defaultClassName='light gray'
              image={isLiked ? likeIcon : hearthIcon}
            />
          </div>
          <ButtonImg defaultClassName='light gray' image={compareIcon} />
        </div>
      </div>
      <div className='product__item-footer'>
        <Button text='Купить в 1 клик' defaultClassName='light item-btn' />
        <ButtonImg image={cartIcon} />
      </div>
    </div>
  );
};
