import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import NewsList from "../components/News/NewsList";

const NewsPage = () => {
  return (
    <div className='wrapper'>
      <Header />
     <div className="container">
     <h1 className="title__name">Новости</h1>
     <NewsList/>
     </div>
      <Footer />
    </div>
  );
};

export default NewsPage;