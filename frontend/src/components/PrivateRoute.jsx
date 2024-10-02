// PrivateRoute.jsx
import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element, isAdmin, ...rest }) => {
  return (
    <Route
      {...rest}
      element={isAdmin ? element : <Navigate to="/login" replace />}
    />
  );
};

export default PrivateRoute;
