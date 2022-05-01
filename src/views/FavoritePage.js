import React from "react";
import Faverite from "../components/Favarite/Favarite";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

const FavoritePage = () => {
  return (
    <div>
      <Header />
      <Faverite />
      <Footer />
    </div>
  );
};

export default FavoritePage;
