import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Search } from "../components/Search/Search";

export const SearchResultsPage = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Search />
      <Footer />
    </div>
  );
};
