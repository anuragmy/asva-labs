import React from "react";
import TodoList from "../components/Todos/TodoList";
import styled from "styled-components";
import { logout } from "../action";
import { useDispatch } from "react-redux";

const LogutButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  margin-left: 8px;
  color: white;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 20%;
  background-color: #0d5a6d;
`;

const Home = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h2 style={{ textAlign: "center" }}>ToDo App</h2>
      <LogutButton onClick={() => dispatch(logout())}>Log Out</LogutButton>
      <TodoList />
    </>
  );
};

export default Home;
