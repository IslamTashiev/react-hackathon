import React, { useContext, useEffect } from "react";
import { appContext } from "../../context/appContext";
import { ProductItem } from "./ProductItem";
import arrowIcon from "../../assets/images/rigth-arrow.svg";
import { Oval } from "react-loader-spinner";

import "../ProductList/style.css";

export const ProductList = () => {
  const { products, fetchProducts } = useContext(appContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="products__list-content">
      <div className="products__list">
        {products.length ? (
          products.map((item) => (
            <React.Fragment key={item.id}>
              <ProductItem product={item} />
            </React.Fragment>
          ))
        ) : (
          <div className="loader">
            <Oval
              ariaLabel="loading-indicator"
              height={100}
              width={100}
              strokeWidth={3}
              color="#2A5275"
              secondaryColor="#838688"
            />
          </div>
        )}
      </div>
    </div>
  );
};
