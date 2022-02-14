import React from "react";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  const token = useSelector(({ todos }) => todos.auth.token);
  return token ? <Home /> : <Login />;
};

export default App;
