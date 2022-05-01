import React, { useState } from "react";
import backtackIcon from "../../assets/images/backtack.svg";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase/config";
import { Button } from "../Buttons/Button";
import { FormDropDown } from "../ProductCreate/FormDropDown";

export const UpdateForm = ({ updateProduct }) => {
  const [title, setTitle] = useState(updateProduct.title);
  const [description, setDescription] = useState(updateProduct.description);
  const [price, setPrice] = useState(updateProduct.price);
  const [productImage, setProductImage] = useState(updateProduct.imageURL);
  const [breakeType, setBreakeType] = useState("-");
  const [type, setType] = useState("-");
  const [control, setControl] = useState("-");
  const [mileagePerCharge, setMileagePerCharge] = useState(36);
  const [power, setPower] = useState(300);
  const [speed, setSpeed] = useState(25);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const files = e.target.files;
    createImage(files[0]);
  };
  const createImage = (file) => {
    let image = new Image();
    let reader = new FileReader();
    reader.onload = (e) => {
      setProductImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    const characteristic = {
      type,
      control,
      mileagePerCharge,
      power,
      speed,
      breakeType,
    };
    const addedProduct = {
      title,
      description,
      price,
      category: 2,
      imageURL: productImage,
      isLiked: false,
      raiting: 4,
      characteristic,
    };
    // await addDoc(collection(db, "products"), addedProduct);
    const updateRef = doc(db, "products", updateProduct.id);
    await updateDoc(updateRef, addedProduct);
    navigate(`/product/${updateProduct.id}`);
  };

  return (
    <form className='create__form'>
      <div className='create__input'>
        <label className='input__label'>Название товара</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type='text'
          required
          className='input'
        />
      </div>
      <div className='create__input'>
        <label className='input__label'>Описание товара</label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
          className='input textaarea'
        />
      </div>
      <div className='form__footer'>
        <div className='form__footer-item'>
          <FormDropDown />
          <div className='create__input price'>
            <label className='input__label'>Цена товара</label>
            <input
              onChange={(e) => setPrice(e.target.value)}
              type='number'
              value={price}
              required
              className='input'
            />
          </div>
          <div className='create__input file'>
            <label className='input__label'>Фотография товара</label>
            <label className='input file'>
              <h4>Закрепить</h4>
              <img src={backtackIcon} />
              <input
                onChange={(e) => handleChange(e)}
                type='file'
                className='input'
              />
            </label>
          </div>
        </div>
        <div className='form__footer-item create__input'>
          <label className='input__label'>Характеристика</label>
          <div className='characteristic '>
            <div className='characteristic__item'>
              <div className='characteristic__item-title'>Тип:</div>
              <input
                value={type}
                onChange={(e) => setType(e.target.value)}
                type='text'
              />
            </div>
            <div className='characteristic__item'>
              <div className='characteristic__item-title'>
                Макс.скорость до (км/ч):
              </div>
              <input
                value={speed}
                onChange={(e) => setSpeed(e.target.value)}
                type='text'
              />
            </div>
            <div className='characteristic__item'>
              <div className='characteristic__item-title'>
                Мощность двигателя:
              </div>
              <input
                value={power}
                onChange={(e) => setPower(e.target.value)}
                type='text'
              />
            </div>
            <div className='characteristic__item'>
              <div className='characteristic__item-title'>
                Пробег на одном заряде:
              </div>
              <input
                value={mileagePerCharge}
                onChange={(e) => setMileagePerCharge(e.target.value)}
                type='text'
              />
            </div>
            <div className='characteristic__item'>
              <div className='characteristic__item-title'>
                Тип переднего тормоза:
              </div>
              <input
                value={breakeType}
                onChange={(e) => setBreakeType(e.target.value)}
                type='text'
              />
            </div>
            <div className='characteristic__item'>
              <div className='characteristic__item-title'>Круиз-контроль:</div>
              <input
                value={control}
                onChange={(e) => setControl(e.target.value)}
                type='text'
              />
            </div>
          </div>
        </div>
      </div>
      <div onClick={handleSubmit}>
        <Button text='Сохранить изменения' defaultClassName='create__btn' />
      </div>
    </form>
  );
};