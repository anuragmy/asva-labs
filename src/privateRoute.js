/* eslint-disable react/prop-types */
import React from "react";
import { Navigate, Route } from "react-router";

const PrivateRoute = ({ component: Component, token, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        token ? <Component {...props} /> : <Navigate to="/login" />
      }
    />
  );
};

export default PrivateRoute;
