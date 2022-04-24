import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./context/appContext";
// import { Header } from "./components/Header/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        {/* <Header /> */}
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
