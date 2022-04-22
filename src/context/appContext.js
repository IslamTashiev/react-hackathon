import axios from "axios";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  products: [],
  detailProduct: null,
  cart: [],
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

    default:
      break;
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
  const fetchProductDetail = async (id) => {
    const { data } = await axios.get(`${URL}/products/${id}`);

    dispatch({
      type: "SET_PRODUCT_DETAIL",
      payload: data,
    });
  };

  return (
    <appContext.Provider
      value={{
        products: state.products,
        detailProduct: state.detailProduct,
        fetchProducts,
        fetchProductDetail,
      }}
    >
      {children}
    </appContext.Provider>
  );
}
