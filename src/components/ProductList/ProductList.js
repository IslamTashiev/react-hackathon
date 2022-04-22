import React, { useContext, useEffect } from "react";
import { appContext } from "../../context/appContext";
import { ProductItem } from "./ProductItem";

export const ProductList = () => {
  const { products, fetchProducts } = useContext(appContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products__list-content">
      <div className="container">
        <div className="product__list-header">
          <h1 className="product__list-title">Хиты продаж</h1>
          <div className="all__products">
            Все товары
            <svg
              width="6"
              height="11"
              viewBox="0 0 6 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.68907 5.20829C5.85749 5.3663 5.85749 5.6337 5.68907 5.79171L0.673684 10.4971C0.418255 10.7368 1.378e-07 10.5557 1.33623e-07 10.2054L2.14003e-08 0.794595C1.72237e-08 0.444349 0.418255 0.263239 0.673684 0.502881L5.68907 5.20829Z"
                fill="#2A5275"
              />
            </svg>
          </div>
        </div>
        <div className="products__list">
          {products.length ? (
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
