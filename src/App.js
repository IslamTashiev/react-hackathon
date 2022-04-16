import React from "react";
import { Routes, Route } from "react-router-dom";
import CardPage from "./views/CardPage";
import ContactPage from "./views/ContactPage";
import { HomePage } from "./views/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/card" element={<CardPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
