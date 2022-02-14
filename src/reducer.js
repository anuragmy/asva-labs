import {
  ADD_TODO,
  REMOVE_TODO,
  MARK_COMPLETE,
  AUTH,
  LOGOUT,
} from "./actionTypes";

const initialState = {
  data: [],
  isLoading: false,
  auth: {},
};

export const todos = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH: {
      return {
        ...state,
        auth: {
          name: action.payload.name,
          token: action.payload.token,
          email: action.payload.email,
        },
      };
    }
    case LOGOUT: {
      return {
        ...state,
        auth: {},
      };
    }
    case ADD_TODO: {
      return {
        ...state,
        data: state.data.concat(payload),
      };
    }
    case REMOVE_TODO: {
      const { text } = payload;
      return {
        ...state,
        data: state.data.filter((todo) => todo.text !== text),
      };
    }
    case MARK_COMPLETE: {
      const { text } = payload;
      return {
        ...state,
        data: state.data.map((todo) => {
          if (todo.text === text) {
            return { ...todo, isCompleted: true };
          } else return todo;
        }),
      };
    }

    default:
      return {
        ...state,
        isLoading: false,
      };
  }
};
