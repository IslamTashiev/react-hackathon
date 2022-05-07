import React, { useContext, useEffect } from "react";
import { AdminAddButton } from "../components/Admin/AdminAddButton";
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
    <div>
      <JustSlider />
      <ProductList />
      {isAdmin ? <AdminAddButton /> : <></>}
    </div>
  );
};
