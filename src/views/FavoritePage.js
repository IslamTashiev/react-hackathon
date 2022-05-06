import React from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Favorite } from "../components/Favorite/Favorite";

export const FavoritePage = () => {
  return (
    <div className="wrapper">
      <Header />
      <Favorite />
      <Footer />
    </div>
  );
};
