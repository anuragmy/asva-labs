import * as actionTypes from "./actionTypes";

export const addTodo = (data) => ({
  type: actionTypes.ADD_TODO,
  payload: data,
});

export const markComplete = (data) => ({
  type: actionTypes.MARK_COMPLETE,
  payload: data,
});

export const removeTodo = (data) => ({
  type: actionTypes.REMOVE_TODO,
  payload: data,
});

export const auth = (data) => ({
  type: actionTypes.AUTH,
  payload: data,
});

export const logout = () => ({
  type: actionTypes.LOGOUT,
});
