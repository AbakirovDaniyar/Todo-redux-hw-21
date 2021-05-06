import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../actions/todoList";

const initialState = [
  {
    text: "go to the shop",
    complete: false,
  },
  {
    text: "tasks completed!",
    complete: false,
  },
]

export const todolist_reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.payload,
          complete: false,
        },
      ]

    case TOGGLE_TODO:
      return state.map((todo, id) => {
        return id === action.payload
          ? { ...todo, complete: !todo.complete }
          : todo;
      });

    // return ...
    case DELETE_TODO:
      return state.filter((todo, id) => {
        return id !== action.payload
      })
    default:
      return state;
  }
};
