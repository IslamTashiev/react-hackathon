import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { JustSlider } from "../components/JustSlider/JustSlider";
import { ProductList } from "../components/ProductList/ProductList";

export const HomePage = () => {
  return (
    <div className='wrapper'>
      <Header />
      {/* <JustSlider /> */}
      <ProductList />
      <Footer />
    </div>
  );
};
