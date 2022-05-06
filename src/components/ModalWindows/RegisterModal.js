import React, { useState } from "react";
import closeIcon from "../../assets/images/close-icon.svg";
import { Button } from "../Buttons/Button";
import "./style.css";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/config";

export const RegisterModal = ({
  isActive,
  handleChangeRegisterModal,
  handleChangeModal,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const createUser = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        update(userCredential.user);
        handleChangeRegisterModal();
      })
      .catch((e) => {
        console.log(e.message);
      });
    const update = async (user) => {
      await updateProfile(user, {
        displayName: name,
        photoURL: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
      });
    };
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
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type='email'
            />
          </div>
          <div className='form__input'>
            <label>Имя</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type='text'
            />
          </div>
          <div className='form__input'>
            <label>Придумайте пароль</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type='password'
            />
          </div>
          <div className='form__text register'>
            Регистрируясь, вы соглашаетесь с пользовательским соглашением
          </div>
          <div onClick={createUser}>
            <Button text='Зарегистрироваться' defaultClassName='form__button' />
          </div>
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
