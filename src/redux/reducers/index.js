import { combineReducers } from "redux";
import { cartTodos } from "./todo/todos";
import { textBoxNewTodoReducer } from "./todo/textBoxNewTodo";
import { textCategoryReducer } from "./todo/setCategorytxt";
import { categorysTodos } from './todo/categoryTodo';
import { setCategoryReducer } from "./todo/setCategory";

export const reducers = combineReducers({
  todos: cartTodos,
  categorys: categorysTodos,
  categoryID:setCategoryReducer,
  txttodo: textBoxNewTodoReducer,
  txtcategory: textCategoryReducer,
});
