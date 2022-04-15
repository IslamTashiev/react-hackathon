import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./views/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
