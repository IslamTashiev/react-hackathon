import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import CardPage from "./views/CardPage";
import ContactPage from "./views/ContactPage";

import ProfileMain from "./views/ProfileMain";
import ProfilePerconalData from "./views/ProfilePerconalData";

import { DetailProductPage } from "./views/DetailProductPage";

import { HomePage } from "./views/HomePage";
import ProfileHistory from "./views/ProfileHistory";
import ProfileChangePass from "./views/ProfileChangePass";
import FavoritePage from "./views/FavoritePage";
import { CategoryPage } from "./views/CategoryPage";
import { ProdcutCreatePage } from "./views/ProdcutCreatePage";
import { UpdatePage } from "./views/UpdatePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/card" element={<CardPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/profilemain" element={<ProfileMain />} />
        <Route path="/perconaldata" element={<ProfilePerconalData />} />
        <Route path="/profilehistory" element={<ProfileHistory />} />
        <Route path="/profilechange" element={<ProfileChangePass />} />
        <Route path="/product/:id" element={<DetailProductPage />} />
        <Route path="/favarite" element={<FavoritePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/create/product" element={<ProdcutCreatePage />} />
        <Route path="/update/product/:id" element={<UpdatePage />} />
      </Routes>
    </div>
  );
}

export default App;
