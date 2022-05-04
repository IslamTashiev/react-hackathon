import React, { useContext, useEffect } from "react";
import { appContext } from "../../context/appContext";
import { useUser } from "../../hooks/useUser";
import { CategoryProductList } from "../ProductList/CategoryProductList";
import SideBar from "../ProfileSideBar/SideBar";
import "./style.css";

export const Favorite = () => {
  const { getFavoriteProducts, favorite } = useContext(appContext);

  const user = useUser();

  useEffect(() => {
    getFavoriteProducts();
  }, []);

  return (
    <div className='favorite'>
      <div className='container'>
        <h1 className='favorite__title'>Избранное</h1>
        <div className='favorite__content'>
          {user ? (
            <div className='favorite__sidebar'>
              <SideBar />
            </div>
          ) : (
            <div></div>
          )}

          <div className='favorite__item'>
            <CategoryProductList products={favorite} />
          </div>
        </div>
      </div>
    </div>
  );
};
