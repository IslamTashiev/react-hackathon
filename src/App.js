import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import CardPage from "./views/CardPage";
import ContactPage from "./views/ContactPage";
import { DetailProductPage } from "./views/DetailProductPage";
import { HomePage } from "./views/HomePage";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/card' element={<CardPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/product/:id' element={<DetailProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
