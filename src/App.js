import React from "react";
import { Routes, Route } from "react-router-dom";
import CardPage from "./views/CardPage";
import ContactPage from "./views/ContactPage";
import ProfileMain from "./views/ProfileMain";
import ProfilePerconalData from "./views/ProfilePerconalData";
import { DetailProductPage } from "./views/DetailProductPage";
import { HomePage } from "./views/HomePage";
import ProfileHistory from "./views/ProfileHistory";
import ProfileChangePass from "./views/ProfileChangePass";
import { CategoryPage } from "./views/CategoryPage";
import { ProdcutCreatePage } from "./views/ProdcutCreatePage";
import NewsPage from "./views/NewsPage";
import NewsDetail from "./components/News/NewsDetail";
import { UpdatePage } from "./views/UpdatePage";
import { FavoritePage } from "./views/FavoritePage";
import { AboutUsPage } from "./views/AboutUsPage";
import { SearchResultsPage } from "./views/SearchResultsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/card' element={<CardPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/profilemain' element={<ProfileMain />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/newsDetail' element={<NewsDetail />} />
        <Route path='/perconaldata' element={<ProfilePerconalData />} />
        <Route path='/profilehistory' element={<ProfileHistory />} />
        <Route path='/profilechange' element={<ProfileChangePass />} />
        <Route path='/product/:id' element={<DetailProductPage />} />
        <Route path='/category/:category' element={<CategoryPage />} />
        <Route path='/user/favorite' element={<FavoritePage />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/admin/create/product' element={<ProdcutCreatePage />} />
        <Route path='/admin/update/product/:id' element={<UpdatePage />} />
        <Route
          path='/search/products/:searchedTerm'
          element={<SearchResultsPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
