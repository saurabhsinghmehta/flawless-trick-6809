import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../Pages/Context/UserAuthContext";

const ProtectedRoute = ({ children }) => {
  let { user } = UserAuth();
  let token = localStorage.getItem("namePerson")||null
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
