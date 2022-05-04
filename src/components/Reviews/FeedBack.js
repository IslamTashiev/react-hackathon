import React, { useState } from "react";
import { useUser } from "../../hooks/useUser";
import { Button } from "../Buttons/Button";
import { LoginModalWindow } from "../ModalWindows/LoginModalWindow";
import { ReviewForm } from "./ReviewForm";

export const FeedBack = () => {
  const [showForm, setShowForm] = useState(false);
  const [activeLoginModal, setActiveLoginModal] = useState(true);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const user = useUser();

  const handleChangeLoginModal = () => {
    setActiveLoginModal(!activeLoginModal);
    setShowForm(!showForm);
  };

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
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
          <>
            {!user ? (
              <>
                <LoginModalWindow
                  handleChangeModal={handleChangeLoginModal}
                  isActive={activeLoginModal || showForm}
                  // handleChangeRegisterModal={handleChangeRegisterModal}
                />
              </>
            ) : (
              <ReviewForm handleShowForm={handleShowForm} />
            )}
          </>
        )}
      </div>
    </>
  );
};
