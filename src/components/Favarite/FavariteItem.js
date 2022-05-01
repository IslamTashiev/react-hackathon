import React, { useContext, useState } from "react";
import Icon from "../../assets/favarite/giro.png";
import starIcon from "../../assets/images/star.svg";
import commentIcon from "../../assets/images/comment.svg";
import compareIcon from "../../assets/images/compare.svg";
import likeIcon from "../../assets/images/hearth-active.svg";
import hearthIcon from "../../assets/images/hearth.svg";
import cartIcon from "../../assets/images/cart-white.svg";

import { ButtonImg } from "../Buttons/ButtonImg";
import { Button } from "../Buttons/Button";
import { appContext } from "../../context/appContext";
const FavariteItem = ({ items }) => {
  const { addToCart } = useContext(appContext);

  const [isLiked, setIsLiked] = useState(false);

  // const renderedFavItem = items.map((item) => {
  //   return (
  //     <>
  //       <div className="favarite__item-sales">
  //         <span>{item.sales}</span>
  //       </div>
  //       <img className="favarite-img" src={Icon} />
  //       <div className="category-item">{item.category}</div>
  //       <div className="item__title">{item.title}</div>
  //       <div className="product__item-info">
  //         <div className="info__raiting">
  //           <img src={starIcon} />
  //           <img src={starIcon} />
  //           <img src={starIcon} />
  //           <img src={starIcon} />
  //           <img src={starIcon} />
  //         </div>
  //         <div className="info__commit">
  //           <img src={commentIcon} />({item.comment})
  //         </div>
  //       </div>
  //       <div className="product__item-interface">
  //         <div className="interface__price"> {item.price} ₽</div>
  //         <div className="interface__btns">
  //           <div onClick={() => setIsLiked(!isLiked)}>
  //             <ButtonImg
  //               defaultClassName="light gray"
  //               image={isLiked ? likeIcon : hearthIcon}
  //             />
  //           </div>
  //           <ButtonImg defaultClassName="light gray" image={compareIcon} />
  //         </div>
  //       </div>
  //       <div className="product__item-footer">
  //         <Button text="Купить в 1 клик" defaultClassName="light item-btn" />
  //         <div onClick={() => addToCart()}>
  //           <ButtonImg image={cartIcon} />
  //         </div>
  //       </div>
  //     </>
  //   );
  // });

  return (
    <div className="favarite__item">
      <div className="favarite__item-sales">
        <span>Хит продаж</span>
      </div>
      <img className="favarite-img" src={Icon} />
      <div className="category-item">1</div>
      <div className="item__title">ывавыа</div>
      <div className="product__item-info">
        <div className="info__raiting">
          <img src={starIcon} />
          <img src={starIcon} />
          <img src={starIcon} />
          <img src={starIcon} />
          <img src={starIcon} />
        </div>
        <div className="info__commit">
          <img src={commentIcon} />
          (17)
        </div>
      </div>
      <div className="product__item-interface">
        <div className="interface__price"> 100 ₽</div>
        <div className="interface__btns">
          <div onClick={() => setIsLiked(!isLiked)}>
            <ButtonImg
              defaultClassName="light gray"
              image={isLiked ? likeIcon : hearthIcon}
            />
          </div>
          <ButtonImg defaultClassName="light gray" image={compareIcon} />
        </div>
      </div>
      <div className="product__item-footer">
        <Button text="Купить в 1 клик" defaultClassName="light item-btn" />
        <div onClick={() => addToCart()}>
          <ButtonImg image={cartIcon} />
        </div>
      </div>
    </div>
  );
};

export default FavariteItem;
