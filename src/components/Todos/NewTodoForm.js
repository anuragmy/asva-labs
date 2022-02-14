/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import { addTodo } from "../../action";

const TodoForm = styled.div`
  border-radius: 8px;
  padding: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  box-shadow: 0 4px 8px grey;
`;

const NewTodoInput = styled.input`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-bottom: 2px solid #ddd;
  border-radius: 8px;
  width: 70%;
  outline: none;
`;

const NewTodoButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  margin-left: 8px;
  width: 20%;
  background-color: #22ee22;
`;

const NewTodoForm = ({ todos = [] }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const isDuplicate = () => todos.some((todo) => todo.text === value);

  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) return;
    if (isDuplicate()) return;
    if (!isDuplicate()) {
      dispatch(
        addTodo({
          text: value,
          date: new Date().toLocaleDateString(),
          isCompleted: false,
        })
      );
      setValue("");
    }
  };

  return (
    <TodoForm data-cy="form">
      <form onSubmit={handleChange}>
        <NewTodoInput
          type="text"
          placeholder="Type your todo here"
          value={value}
          onChange={handleChange}
        />
        <NewTodoButton onClick={handleSubmit} data-cy="submit">
          Create Todo
        </NewTodoButton>
      </form>
    </TodoForm>
  );
};

export default NewTodoForm;
