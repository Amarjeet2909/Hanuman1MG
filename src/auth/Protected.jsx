import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  //   const user = useSelector((state) => state.user);
  let location = useLocation();
  let token = localStorage.getItem("usertoken");

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;