import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase/config";
import { Button } from "../Buttons/Button";

export const CreateForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [productImage, setProductImage] = useState("");

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
    const addedProduct = {
      title,
      description,
      price,
      category: 2,
      imageURL: productImage,
      isLiked: false,
      raiting: 4,
    };
    await addDoc(collection(db, "products"), addedProduct);
    navigate("/");
  };

  return (
    <form className='create__form'>
      <div className='create__input'>
        <label className='input__label'>Название товара</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type='text'
          required
          className='input'
        />
      </div>
      <div className='create__input'>
        <label className='input__label'>Описание товара</label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          required
          className='input textaarea'
        />
      </div>
      <div className='create__input'>
        <label className='input__label'>Цена товара</label>
        <input
          onChange={(e) => setPrice(e.target.value)}
          type='number'
          required
          className='input'
        />
      </div>
      <div className='create__input file'>
        <label className='input__label'>Фотография товара</label>
        <label className='input file'>
          <h4>Закрепить</h4>
          <input
            onChange={(e) => handleChange(e)}
            type='file'
            className='input'
          />
        </label>
      </div>
      <div onClick={handleSubmit}>
        <Button text='Создать' defaultClassName='create__btn' />
      </div>
    </form>
  );
};
