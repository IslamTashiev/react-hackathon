import React from "react";
import { AboutUs } from "../components/AboutUs/AboutUs";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

export const AboutUsPage = () => {
  return (
    <div className='wrapper'>
      <Header />
      <AboutUs />
      <Footer />
    </div>
  );
};
