import React, { useState } from "react";
import { Button } from "../Buttons/Button";
import { ReviewForm } from "./ReviewForm";

export const FeedBack = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className='feed'>
      {!showForm ? (
        <div className='feedback '>
          <div className='feedback__title'>Напишите своё мнение о товаре</div>
          <div className='feedback__subtitle'>
            Сделайте выбор других покупалетей легче
          </div>
          <div onClick={handleShowForm}>
            <Button text='Написать отзыв' defaultClassName='feedback__btn' />
          </div>
        </div>
      ) : (
        <ReviewForm handleShowForm={handleShowForm} />
      )}
    </div>
  );
};
