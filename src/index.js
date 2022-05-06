import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./context/appContext";
import { ScrollToTop } from "./components/Route/ScrollToTop";
import { SequireAdminRoutes } from "./components/Route/SequireAdminRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <SequireAdminRoutes>
          <ScrollToTop>
            <App />
          </ScrollToTop>
        </SequireAdminRoutes>
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
