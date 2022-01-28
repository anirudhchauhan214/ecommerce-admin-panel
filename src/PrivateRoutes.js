import React from "react";
import { Navigate } from "react-router-dom";
import Layout from "./helper/Layout";

function PrivateRoute({ children }) {
  const auth = localStorage.getItem("token");

  return auth ? <Layout>{children}</Layout> : <Navigate to="/login" />;
}
export default PrivateRoute;
