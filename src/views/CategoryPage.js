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
    console.log(products);
  }, []);

  return (
    <div>
      <Header />
      <CategoryProductList products={products} />
      <Footer />
    </div>
  );
};
