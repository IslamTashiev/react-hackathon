import React, { useContext, useEffect } from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { CategoryProductList } from "../components/ProductList/CategoryProductList";
import { useParams } from "react-router-dom";
import { appContext } from "../context/appContext";

export const CategoryPage = () => {
  const { category } = useParams();
  const { products, fetchCategoryProducts } = useContext(appContext);
  useEffect(() => {
    fetchCategoryProducts(category);
  }, [category]);

  return (
    <div className='wrapper'>
      <Header />
      <div>
        <div className='container'>
          <CategoryProductList products={products} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
