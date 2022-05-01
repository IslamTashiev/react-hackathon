import React, { useContext, useEffect } from "react";
import { appContext } from "../../context/appContext";
import { ProductItem } from "./ProductItem";
import arrowIcon from "../../assets/images/rigth-arrow.svg";

export const ProductList = () => {
  const { products, getProductsFromFirebase } = useContext(appContext);

  useEffect(() => {
    getProductsFromFirebase();
  }, []);

  return (
    <div className="products__list-content">
      <div className="container">
        <div className="product__list-header">
          <h1 className="product__list-title">Хиты продаж</h1>
          <div className="all__products">
            Все товары
            <img src={arrowIcon} />
          </div>
        </div>
        <div className='products__list'>
          {products ? (
            products.map((item) => (
              <React.Fragment key={item.id}>
                <ProductItem product={item} />
              </React.Fragment>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};
