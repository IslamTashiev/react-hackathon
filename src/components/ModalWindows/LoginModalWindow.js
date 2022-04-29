import React from "react";
import closeIcon from "../../assets/images/close-icon.svg";
import { Button } from "../Buttons/Button";
import { ButtonImg } from "../Buttons/ButtonImg";
import googleIcon from "../../assets/images/google.svg";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../../firebase/config";

import "./style.css";

export const LoginModalWindow = ({
  isActive,
  handleChangeModal,
  handleChangeRegisterModal,
}) => {
  const handleSignIn = async (e) => {
    provider.setCustomParameters({ prompt: "select_account" });
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // setUser(result.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div className={`login__modal modal__window ${isActive ? "active" : ""}`}>
      <div className='login__modal-content'>
        <div className='content__header'>
          <div className='header__text'>Вход</div>
          <img
            onClick={handleChangeModal}
            className='close-icon'
            src={closeIcon}
          />
        </div>
        <div onClick={handleSignIn}>
          <ButtonImg
            image={googleIcon}
            text='Войти с помощью Google'
            defaultClassName='light with__google'
          />
        </div>
        <form className='login__form'>
          <div className='form__input'>
            <label>Эл. почта или телефон</label>
            <input type='email' />
          </div>
          <div className='form__input'>
            <label>Пароль</label>
            <input type='password' />
          </div>
          <div className='form__text'>Забыли пароль?</div>
          <label className='form__checkbox'>
            <input type='checkbox' />
            <span>Запомнить меня</span>
          </label>
          <Button text='Войти' defaultClassName='form__button' />
          <div
            onClick={() => {
              handleChangeRegisterModal();
              handleChangeModal();
            }}
            className='form__text center'>
            Зарегистрироваться
          </div>
        </form>
      </div>
    </div>
  );
};
