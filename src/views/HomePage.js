import React, { useContext, useEffect } from "react";
import { AdminAddButton } from "../components/Admin/AdminAddButton";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { JustSlider } from "../components/JustSlider/JustSlider";
import { ProductList } from "../components/ProductList/ProductList";
import { appContext } from "../context/appContext";
import { useAdmin } from "../hooks/useAdmin";

export const HomePage = () => {
  const isAdmin = useAdmin();
  const { getUsersFromFirebase } = useContext(appContext);
  useEffect(() => {
    getUsersFromFirebase();
  }, []);

  return (
    <div className='wrapper'>
      <Header />
      {/* <JustSlider /> */}
      <ProductList />
      <Footer />
      {isAdmin ? <AdminAddButton /> : <></>}
    </div>
  );
};
