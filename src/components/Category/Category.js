import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { appContext } from "../../context/appContext";
import { CategoryProductList } from "../ProductList/CategoryProductList";
import "./style.css";

export const Category = () => {
  const { category } = useParams();
  const { products, fetchCategoryProducts } = useContext(appContext);
  useEffect(() => {
    fetchCategoryProducts(category);
  }, [category]);
  return (
    <div className='category'>
      <div className='container'>
        <div className='category__content'>
          <h1>Категории</h1>
          <CategoryProductList products={products} />
        </div>
      </div>
    </div>
  );
};
