import { combineReducers } from "redux";
import { cartTodos } from "./todo/todos";
import { textBoxNewTodoReducer } from "./todo/textBoxNewTodo";
import { textCategoryReducer } from "./todo/setCategorytxt";
import { categorysTodos } from "./todo/categoryTodo";
import { setCategoryReducer } from "./todo/setCategory";
import { setThemReducer } from "./settings/Them/changeThem";
import { setLanguageReducer } from "./settings/Language/changeLanguage";
import { setDirectionReducer } from "./settings/direction/changeDirection";

export const reducers = combineReducers({
  todos: cartTodos,
  categorys: categorysTodos,
  categoryID: setCategoryReducer,
  txttodo: textBoxNewTodoReducer,
  txtcategory: textCategoryReducer,
  them: setThemReducer,
  language: setLanguageReducer,
  direction: setDirectionReducer,
});
