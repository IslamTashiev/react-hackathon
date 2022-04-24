import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import CardPage from "./views/CardPage";
import ContactPage from "./views/ContactPage";

import ProfileMain from './views/ProfileMain';
import ProfilePerconalData from './views/ProfilePerconalData';

import { DetailProductPage } from "./views/DetailProductPage";

import { HomePage } from "./views/HomePage";
import ProfileHistory from "./views/ProfileHistory";
import ProfileChangePass from "./views/ProfileChangePass";
import NewsPage from "./views/NewsPage";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/card' element={<CardPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/newsDetail' element={<NewsDetail />} />
        <Route path="/profilemain" element={<ProfileMain />} />
        <Route path="/perconaldata" element={<ProfilePerconalData />} />
        <Route path="/profilehistory" element={<ProfileHistory />} />
        <Route path="/profilechange" element={<ProfileChangePass />} />

        <Route path='/product/:id' element={<DetailProductPage />} />

      </Routes>
    </div>
  );
}

export default App;
