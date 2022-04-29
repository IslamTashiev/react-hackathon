import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";

export const useUser = () => {
  const [user, setUser] = useState(auth.currentUser);
  // onAuthStateChanged(auth, (_user) => {
  //   setUser(_user);
  // });
  return user;
};
