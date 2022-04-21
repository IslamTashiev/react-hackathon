import React from "react";
import { Routes, Route } from "react-router-dom";
import NewsDetail from "./components/News/NewsDetail";
import CardPage from "./views/CardPage";
import ContactPage from "./views/ContactPage";
import { DetailProductPage } from "./views/DetailProductPage";
import { HomePage } from "./views/HomePage";
import NewsPage from "./views/NewsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/card' element={<CardPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/newsDetail' element={<NewsDetail />} />
        <Route path='/product/:id' element={<DetailProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
