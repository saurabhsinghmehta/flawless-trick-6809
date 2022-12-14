import React from "react";
import { Route, Routes } from "react-router-dom";
import Sorting from "../Components/Sorting";
import ProductManagement from "../Components/ProductManagement";
import AdminDashboard from "../Pages/AdminDashboard";
import Menu from "../Pages/Menu";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="/prod_managment" element={<ProductManagement />} />
      <Route path="/admin_sorting" element={<Sorting />} />
    </Routes>
  );
}

export default MainRoutes;
