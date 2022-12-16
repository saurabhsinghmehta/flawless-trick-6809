import React from "react";
import { Route, Routes } from "react-router-dom";
import Sorting from "../Components/Sorting";
import ProductManagement from "../Components/ProductManagement";
import AdminDashboard from "../Pages/AdminDashboard";
import Menu from "../Pages/Menu";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Otp from "../Pages/Otp";
import AdminLogin from "../Pages/AdminLogin";
import AdminLogout from "../Pages/AdminLogout";
import { UserAuthContextProvider } from "../Pages/Context/UserAuthContext";
import ProtectedRoute from "../Components/ProtectedRoute";
function MainRoutes() {
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminlogout" element={<AdminLogout />} />
        <Route path="/otp" element={<Otp />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/prod_managment" element={<ProductManagement />} />
        <Route path="/admin_sorting" element={<Sorting />} />
      </Routes>
    </UserAuthContextProvider>
  );
}

export default MainRoutes;
