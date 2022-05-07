import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./context/appContext";
import { ScrollToTop } from "./components/Route/ScrollToTop";
import { SequireAdminRoutes } from "./components/Route/SequireAdminRoutes";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ModalContextProvider } from "./context/modalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <ModalContextProvider>
          <SequireAdminRoutes>
            <ScrollToTop>
              <div className='wrapper'>
                <Header />
                <App />
                <Footer />
              </div>
            </ScrollToTop>
          </SequireAdminRoutes>
        </ModalContextProvider>
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
