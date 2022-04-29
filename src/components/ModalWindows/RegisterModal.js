import React, { useState } from "react";
import closeIcon from "../../assets/images/close-icon.svg";
import { Button } from "../Buttons/Button";
import "./style.css";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../../firebase/config";

export const RegisterModal = ({
  isActive,
  handleChangeRegisterModal,
  handleChangeModal,
}) => {
  // let user = null;

  const [user, setUser] = useState(null);

  const handleSignIn = async (e) => {
    provider.setCustomParameters({ prompt: "select_account" });
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        setUser(result.user);
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
          <div className='header__text'>Регистрация</div>
          <img
            onClick={handleChangeRegisterModal}
            className='close-icon'
            src={closeIcon}
          />
        </div>
        <form className='login__form'>
          <div className='form__input'>
            <label>Эл. почта</label>
            <input type='email' />
          </div>
          <div className='form__input'>
            <label>Номер телефона</label>
            <input type='text' placeholder='+7 (921) 340-90-56' />
          </div>
          <div className='form__input'>
            <label>Придумайте пароль</label>
            <input type='password' />
          </div>
          <div className='form__text register'>
            Регистрируясь, вы соглашаетесь с пользовательским соглашением
          </div>
          {/* <div onClick={(e) => handleSignIn(e)}> */}
          <Button text='Зарегистрироваться' defaultClassName='form__button' />
          {/* </div> */}
          <div
            onClick={() => {
              handleChangeModal();
              handleChangeRegisterModal();
            }}
            className='form__text center'>
            Я уже зарегистрирован
          </div>
        </form>
      </div>
    </div>
  );
};
