import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { ProductDetail } from "../components/ProductList/ProductDetail";
import { appContext } from "../context/appContext";

export const DetailProductPage = () => {
  const { id } = useParams();
  const { detailProduct, fetchProductDetail } = useContext(appContext);

  useEffect(() => {
    fetchProductDetail(id);
  }, []);

  return (
    <div className='wrapper'>
      <Header />
      <ProductDetail product={detailProduct} />
      <Footer />
    </div>
  );
};
