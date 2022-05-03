import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAdmin } from "../../hooks/useAdmin";

export const SequireAdminRoutes = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isAdmin = useAdmin();
  useEffect(() => {
    if (pathname.includes("/admin")) {
      if (!isAdmin) {
        navigate("/");
      }
    }
  }, [pathname]);
  return <>{children}</>;
};
