import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { ProductCreate } from "../components/ProductCreate/ProductCreate";

export const ProdcutCreatePage = () => {
  return (
    <div className='wrapper'>
      <Header />
      <ProductCreate />
      <Footer />
    </div>
  );
};
