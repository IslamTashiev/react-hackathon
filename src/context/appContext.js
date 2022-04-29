import axios from "axios";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  products: [],
  detailProduct: null,
  cart: [],
  favorite: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "SET_PRODUCT_DETAIL":
      return {
        ...state,
        detailProduct: action.payload,
      };
    case "SET_CART_ITEMS":
      return {
        ...state,
        cart: action.payload,
      };
    case "FILTERED_PRODUCTS":
      return {
        ...state,
        favorite: action.payload.filter((item) => item.isLiked === true),
      };

    default:
      return state;
  }
};

export const appContext = createContext();
const URL = "http://localhost:8080";

export default function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const fetchProducts = async () => {
    const { data } = await axios.get(`${URL}/products`);

    dispatch({
      type: "SET_PRODUCTS",
      payload: data,
    });
  };
  const fetchCartItems = async () => {
    const { data } = await axios.get(`${URL}/card`);

    dispatch({
      type: "SET_CART_ITEMS",
      payload: data,
    });
  };
  const fetchProductDetail = async (id) => {
    const { data } = await axios.get(`${URL}/products/${id}`);

    dispatch({
      type: "SET_PRODUCT_DETAIL",
      payload: data,
    });
  };
  const addToCart = async (addedData) => {
    const editedData = { ...addedData, count: 1 };

    // if (state.cart) {

    // }
    // await fetchCartItems();

    // const editedData = state.cart.map((item) => {
    //   if (item.id === addedData.id) {
    //     return { ...addedData, count: item.count + 1 };
    //   }
    //   console.log(item);
    //   return { ...addedData, count: 1 };
    // });

    await axios.post(`${URL}/card`, editedData);
  };
  const svsd = async () => {
    const { data } = await axios.get(`${URL}/products`);

    dispatch({
      type: "FILTERED_PRODUCTS",
      payload: data,
    });
  };
  const fetchCategoryProducts = async (category) => {
    const { data } = axios.get(`${URL}/products?category=${category}`);
    console.log("hello from fetch category function");
    dispatch({
      type: "SET_PRODUCTS",
      payload: data,
    });
  };
  const setFavoriteProduct = async (id, product) => {
    const newProduct = {
      ...product,
      isLiked: !product.isLiked,
    };
    await axios.patch(`${URL}/products/${id}`, newProduct);
    const { data } = await axios.get(`${URL}/products`);
    // const { detailProduct } = await axios.get(`${URL}/products/${id}`);

    dispatch({
      type: "SET_PRODUCTS",
      payload: data,
    });
    // dispatch({
    //   type: "SET_PRODUCT_DETAIL",
    //   payload: detailProduct,
    // });
  };

  return (
    <appContext.Provider
      value={{
        products: state.products,
        detailProduct: state.detailProduct,
        cartItems: state.cart,
        fetchProducts,
        fetchProductDetail,
        addToCart,
        fetchCartItems,
        fetchCategoryProducts,
        setFavoriteProduct,
      }}>
      {children}
    </appContext.Provider>
  );
}
