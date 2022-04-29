import React from "react";
import { Button } from "../Buttons/Button";

export const ProductReview = () => {
  return (
    <div className='detail__review'>
      <div className='container'>
        <div className='description__title'>
          Отзывы на гироскутер Smart Balance Well 6.5
        </div>
        <div className='review__content'>
          <div className='review__items'>
            <div className='review__item'>
              <div className='review__header'>
                <div className='review__author'>
                  <img
                    src='https://cdn-icons-png.flaticon.com/512/147/147144.png'
                    className='author__avatar'
                  />
                  <div className='author__name'>Александр</div>
                </div>
                <div className='review__date'>07 июня 2021</div>
              </div>
              <div className='review__body'>
                <div className='review__body-title'>Отличный самокат!</div>
                <div className='review__body-text'>
                  Катаюсь каждый день после работы, заряд держит отлично!
                </div>
              </div>
            </div>
          </div>
          <div className='feedback'>
            <div className='feedback__title'>Напишите своё мнение о товаре</div>
            <div className='feedback__subtitle'>
              Сделайте выбор других покупалетей легче
            </div>
            <Button text='Написать отзыв' defaultClassName='feedback__btn' />
          </div>
        </div>
      </div>
    </div>
  );
};
