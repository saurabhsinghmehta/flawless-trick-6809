import React from 'react'
import { Navigate } from "react-router-dom";


const ProtectedRoute2 = ({children}) => {

    let token = localStorage.getItem("namePerson")||null

    if (!token) {
        return <Navigate to="/" />;
      }
  return children
}

export default ProtectedRoute2
