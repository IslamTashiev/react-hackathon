import axios from "axios";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { createContext, useReducer } from "react";
import { db } from "../firebase/config";

const INITIAL_STATE = {
  products: [],
  detailProduct: null,
  cart: [],
  favorite: [],
  reviews: [],
  users: [],
  searchedProducts: [],
  productCategory: "1",
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
    case "SET_REVIEWS":
      return {
        ...state,
        reviews: action.payload,
      };
    case "SET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "SET_SEARCHED_PRODUCTS":
      return {
        ...state,
        searchedProducts: action.payload,
      };
    case "CHANGE_CATEGORY":
      return {
        ...state,
        productCategory: action.payload,
      };

    default:
      return state;
  }
};

export const appContext = createContext();
const URL = "http://localhost:8080";

export default function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const fetchCartItems = async () => {
    const { data } = await axios.get(`${URL}/card`);

    dispatch({
      type: "SET_CART_ITEMS",
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
  const getFavoriteProducts = async () => {
    const productsSnapshot = await getDocs(collection(db, "products"));
    const products = productsSnapshot.docs.map((product) => {
      return { ...product.data(), id: product.id };
    });

    dispatch({
      type: "FILTERED_PRODUCTS",
      payload: products,
    });
  };
  const fetchCategoryProducts = async (category) => {
    const q = query(
      collection(db, "products"),
      where("category", "==", `${category}`),
    );
    const productsSnapshot = await getDocs(q);

    const data = productsSnapshot.docs.map((product) => {
      return { ...product.data(), id: product.id };
    });
    dispatch({
      type: "SET_PRODUCTS",
      payload: data,
    });
  };
  const setFavoriteProduct = async (id, product) => {
    const productRef = doc(db, "products", id);
    await updateDoc(productRef, { isLiked: !product.isLiked });
    getProductsFromFirebase();
    // getProductDetailFromFirebase();
  };
  const getUsersFromFirebase = async () => {
    const usersSnaphsot = await getDocs(collection(db, "users"));
    const users = usersSnaphsot.docs.map((user) => {
      return { ...user.data(), id: user.id };
    });
    // console.log(users);
    dispatch({
      type: "SET_USERS",
      payload: users,
    });
  };
  const setUser = async (data) => {
    console.log(state.users);
    const addedData = state.users.map((user) => {
      return user.id !== data.id ? data : {};
    });
    await addDoc(collection(db, "users"), addedData);
  };
  const getProductsFromFirebase = async () => {
    const q = query(collection(db, "products"), orderBy("createdAt"));
    const productsSnapshot = await getDocs(q);
    const products = productsSnapshot.docs.map((product) => {
      return { ...product.data(), id: product.id };
    });

    dispatch({
      type: "SET_PRODUCTS",
      payload: products,
    });
  };
  const getProductDetailFromFirebase = async (id) => {
    const detailSnapShot = await getDoc(doc(db, "products", id));
    const data = { ...detailSnapShot.data(), id: detailSnapShot.id };
    dispatch({
      type: "SET_PRODUCT_DETAIL",
      payload: data,
    });
  };
  const getReviewsFromFirebase = async () => {
    const q = query(collection(db, "reviews"), orderBy("createdAt"));
    const reviewSnapshot = await getDocs(q);
    const reviewList = reviewSnapshot.docs.map((doc) => {
      const data = { ...doc.data(), id: doc.id };

      return data;
    });

    dispatch({
      type: "SET_REVIEWS",
      payload: reviewList,
    });
  };
  const deleteReview = async (review) => {
    const reviewRef = doc(db, "reviews", review.id);

    await deleteDoc(reviewRef);
  };
  const searchProduct = (searchedValue) => {
    const searchedProducts = state.products.filter((product) => {
      if (searchedValue) {
        return product.title.includes(searchedValue);
      } else {
        return;
      }
    });
    dispatch({
      type: "SET_SEARCHED_PRODUCTS",
      payload: searchedProducts,
    });
  };
  const createProduct = async (addedProduct) => {
    const productRef = collection(db, "products");
    const product = { ...addedProduct, category: state.productCategory };
    await addDoc(productRef, product);
  };
  const changeCategory = (category) => {
    dispatch({
      type: "CHANGE_CATEGORY",
      payload: category,
    });
  };

  return (
    <appContext.Provider
      value={{
        products: state.products,
        detailProduct: state.detailProduct,
        cartItems: state.cart,
        reviews: state.reviews,
        favorite: state.favorite,
        searchedProducts: state.searchedProducts,
        addToCart,
        fetchCartItems,
        fetchCategoryProducts,
        setFavoriteProduct,
        getReviewsFromFirebase,
        deleteReview,
        getProductsFromFirebase,
        getProductDetailFromFirebase,
        setUser,
        getUsersFromFirebase,
        getFavoriteProducts,
        searchProduct,
        createProduct,
        changeCategory,
      }}>
      {children}
    </appContext.Provider>
  );
}
