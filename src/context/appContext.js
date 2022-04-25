import axios from "axios";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  products: [],
  detailProduct: null,
  cards: [],
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
    case "SET_ADD_TO_CARD":
      return {
        ...state,
        cards: action.payload,
      };
    case "SET_CARD_ITEMS":
      return {
        ...state,
        cards: action.payload,
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
  const addToCard = async (addedData) => {
    await axios.post(`${URL}/cards, addedData`);
  };
  const fetchCardItems = async () => {
    const { data } = await axios.get(`${URL}/cards`);
    console.log(state.cards);

    dispatch({
      type: "SET_CARD_ITEMS",
      payload: data,
    });
  };

  return (
    <appContext.Provider
      value={{
        products: state.products,
        detailProduct: state.detailProduct,
        сartItem: state.cards,
        fetchProducts,
        fetchProductDetail,
        addToCard,
        fetchCardItems,
      }}
    >
      {children}
    </appContext.Provider>
  );
}
