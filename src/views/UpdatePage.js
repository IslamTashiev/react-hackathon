import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { ProductUpdatePage } from "../components/Update/ProductUpdatePage";

export const UpdatePage = () => {
  return (
    <div className='wrapper'>
      <Header />
      <ProductUpdatePage />
      <Footer />
    </div>
  );
};
