export const setCategoryReducer = (state = "default", action) => {
  switch (action.type) {
    case "CHANGE_CATEGORY":
      localStorage.setItem("categoryIdSection", action.idCategory);
      return (state = action.idCategory);
    case "RELOAD_CATEGORY_SECTION":
      const categorySection =
        localStorage.getItem("categoryIdSection") !== null
          ? localStorage.getItem("categoryIdSection")
          : "default";
      return (state = categorySection);
    default:
      return state;
  }
};
