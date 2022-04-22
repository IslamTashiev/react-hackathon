import React from "react";
import { Routes, Route } from "react-router-dom";
import CardPage from "./views/CardPage";
import ContactPage from "./views/ContactPage";
import ProfileMain from './views/ProfileMain';
import ProfilePerconalData from './views/ProfilePerconalData';
import { HomePage } from "./views/HomePage";
import ProfileHistory from "./views/ProfileHistory";
import ProfileChangePass from "./views/ProfileChangePass";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/card' element={<CardPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path="/profilemain" element={<ProfileMain />} />
        <Route path="/perconaldata" element={<ProfilePerconalData />} />
        <Route path="/profilehistory" element={<ProfileHistory />} />
        <Route path="/profilechange" element={<ProfileChangePass />} />
      </Routes>
    </div>
  );
}

export default App;
