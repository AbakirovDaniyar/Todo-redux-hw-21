import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import { todolist_reducer } from "./todoList.reducer";

export default combineReducers({
  todolist: todolist_reducer,
  counter: counterReducer,
});
