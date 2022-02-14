/* eslint-disable  */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import {
  getTodos,
  getLoading,
  getCompleteTodos,
  getIncompleteTodos,
} from "../../selectors";

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

const TooList = ({ completeTodos = [], incompleteTodos = [] }) => {
  return (
    <ListWrapper>
      <NewTodoForm />
      {incompleteTodos.length > 0 && <h3>Incomplete</h3>}
      {incompleteTodos.map((todo, i) => (
        <TodoListItem key={i.toString()} todo={todo} />
      ))}
      {completeTodos.length > 0 && <h3>Complete</h3>}
      {completeTodos.map((todo, i) => (
        <TodoListItem key={i.toString()} todo={todo} />
      ))}
    </ListWrapper>
  );
};

const mapStateToProps = (state) => ({
  todos: getTodos(state),
  completeTodos: getCompleteTodos(state),
  incompleteTodos: getIncompleteTodos(state),
});

export default connect(mapStateToProps)(TooList);
