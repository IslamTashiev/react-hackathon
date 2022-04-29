import React from "react";
import closeIcon from "../../assets/images/close-icon.svg";
import { Button } from "../Buttons/Button";
import "./style.css";

export const LoginModalWindow = ({ isActive, handleChangeModal }) => {
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
          <div className='form__text center'>Зарегистрироваться</div>
        </form>
      </div>
    </div>
  );
};
