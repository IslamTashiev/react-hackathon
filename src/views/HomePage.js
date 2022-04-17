import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { JustSlider } from "../components/JustSlider/JustSlider";

export const HomePage = () => {
  return (
    <div className='wrapper'>
      <Header />
      <JustSlider />
      <Footer />
    </div>
  );
};
