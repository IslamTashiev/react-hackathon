import { useEffect, useState } from "react";
import { useUser } from "./useUser";

export const useAdmin = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const user = useUser();

  useEffect(() => {
    if (user && user.email === "ueaten04@gmail.com") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [isAdmin]);
  return isAdmin;
};