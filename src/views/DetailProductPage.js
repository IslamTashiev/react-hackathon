import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { ProductDetail } from "../components/ProductDetail/ProductDetail";
import { Tabs } from "../components/ProductDetail/Tabs";
import { appContext } from "../context/appContext";

export const DetailProductPage = () => {
  const { id } = useParams();
  const { getProductDetailFromFirebase } = useContext(appContext);

  useEffect(() => {
    getProductDetailFromFirebase(id);
  }, []);

  return (
    <div className='wrapper'>
      <Header />
      <ProductDetail />
      <Tabs />
      <Footer />
    </div>
  );
};
