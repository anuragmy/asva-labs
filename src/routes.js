import React from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PrivateRoute from "./privateRoute";

// eslint-disable-next-line react/prop-types
const NavRoutes = ({ token }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" render={() => (token ? <Home /> : <Login />)} />
        {/* <PrivateRoute path="/" token={token} component={Home} /> */}
      </Routes>
    </Router>
  );
};

export default NavRoutes;
