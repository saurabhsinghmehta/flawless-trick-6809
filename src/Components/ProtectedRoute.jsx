import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../Pages/Context/UserAuthContext";
import { useToast } from "@chakra-ui/react";

const ProtectedRoute = ({ children }) => {
  const toast=useToast();
  let { user } = UserAuth();
  let token = localStorage.getItem("namePerson")||null
  if (!user) {
    toast({
      title: "Please Login First",
      status: "info",
      duration: 2000,
      isClosable: true,
      position:"top"
    });
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
