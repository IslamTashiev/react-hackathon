import React, { useContext, useEffect, useState } from "react";
import { appContext } from "../../context/appContext";
import closeIcon from "../../assets/images/close-icon.svg";
import "./style.css";
import { useNavigate } from "react-router-dom";
export const SearchModalBar = ({ isActive, handleChangeModal }) => {
  const { searchProduct, searchedProducts } = useContext(appContext);
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const navigateToSearchedProduct = (id) => {
    navigate(`/product/${id}`);
    setTerm("");
  };

  useEffect(() => {
    searchProduct(term);
  }, [term]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/products/${term}`);
  };

  const renderedSearchItems = searchedProducts.map((searchItem) => {
    return (
      <div
        key={searchItem.id}
        onClick={() => navigateToSearchedProduct(searchItem.id)}
        className='searched__results-item'>
        {searchItem.title}
      </div>
    );
  });

  return (
    <div className={`search__window modal__window ${isActive ? "active" : ""}`}>
      <div className='search__bar'>
        <div className='search__bar-content container'>
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => setTerm(e.target.value)}
              placeholder='Введите запрос, например «Smart balance»'
              type='text'
            />
          </form>
          <div className='search__bar-header'>
            <p>Поиск</p>
            <img
              className='close-icon'
              onClick={handleChangeModal}
              src={closeIcon}
            />
          </div>
          <div className='searched__results'>{renderedSearchItems}</div>
        </div>
      </div>
    </div>
  );
};
