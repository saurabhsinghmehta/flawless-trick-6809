import React from 'react'
import { Navigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react';

const ProtectedRoute2 = ({children}) => {
  const toast=useToast();
    let token = localStorage.getItem("namePerson")||null

    if (!token) {
      toast({
        title: "Please Login First",
        status: "info",
        duration: 2000,
        isClosable: true,
        position:"top"
      });
        return <Navigate to="/" />;
      }
  return children
}

export default ProtectedRoute2
