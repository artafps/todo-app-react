export const increment = (num) => ({ type: "INCREMENT", payload: num });
export const decrement = () => ({ type: "DECREMENT" });
export const sign_in = () => ({ type: "LOGIN" });
export const delete_todo = (id) => ({ type: "CLOSE", _id: id });
export const complited_todo = (id) => ({ type: "COMOLITED", _id: id });
export const new_todo = (text,id) => ({ type: "NEW_TODO", textTodo: text,idsection:id });
export const reload_todo = () => ({ type: "RELOAD_TODO" });

export const  delete_category_mtod = (id)=>({type:"DELETE_CATEGORY_MOVE_TO_DEFAULT",idsection:id})
export const change_text = (text) => ({
  type: "CHANGE_TEXT_TODO",
  payload: text,
});
export const change_text_category = (text) => ({
  type: "CHANGE_TEXT_CATEGORY",
  payload: text,
});
export const new_category = (text) => ({
  type: "NEW_CATEGORY",
  textCategory: text,
});
export const delete_category = (id) => ({ type: "DELETE_CATEGORY", _id: id });
export const reload_category = () => ({ type: "RELOAD_CATEGORY" });
export const set_category = (id) => ({
  type: "CHANGE_CATEGORY",
  idCategory: id,
});
export const reload_category_section = () => ({
  type: "RELOAD_CATEGORY_SECTION",
});