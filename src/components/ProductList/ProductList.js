import React, { useContext, useEffect } from "react";
import { appContext } from "../../context/appContext";

export const ProductList = () => {
  const { products, fetchProducts } = useContext(appContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  return <div>ProductList</div>;
};
