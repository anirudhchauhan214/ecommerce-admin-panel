import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./view/home";
import Users from "./view/users/Users";
import Products from "./view/products/Products";
import ProductCategory from "./view/products/ProductCategory";
import UserProfile from "./view/users/UserProfile";
import Login from "./view/auth/Login";
import Register from "./view/auth/Register";
import PrivateRoute from "./PrivateRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
        />
        <Route
          path="/category"
          element={
            <PrivateRoute>
              <ProductCategory />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
