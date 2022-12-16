import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../Pages/Context/UserAuthContext";

const ProtectedRoute = ({ children }) => {
  let { user } = UserAuth();
  if (!user) {
    return <Navigate to="/admin" />;
  }
  return children;
};

export default ProtectedRoute;
