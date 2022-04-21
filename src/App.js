import React from "react";
import { Routes, Route } from "react-router-dom";
import CardPage from "./views/CardPage";
import ContactPage from "./views/ContactPage";
import { HomePage } from "./views/HomePage";
import CatalogPage from "./views/CatalogPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/card" element={<CardPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
      </Routes>
    </div>
  );
}

export default App;
