import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { NotFound } from "../components/PageNotFound/NotFound";

export const NotFoundPage = () => {
  return (
    <div className='wrapper'>
      <Header />
      <NotFound />
      <Footer />
    </div>
  );
};
