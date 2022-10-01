export const categorysTodos = (state = [], action) => {
  switch (action.type) {
    case "NEW_CATEGORY":
      if (action.textCategory !== "" && action.textCategory !== " ") {
        const categoryNEW = [...state];
        const category = {
          id: `${Math.floor(Math.random() * 10000)}`,
          name: action.textCategory,
        };
        categoryNEW.push(category);
        localStorage.setItem("category", JSON.stringify(categoryNEW));
        return (state = categoryNEW);
      } else {
        return state;
      }
    case "RELOAD_CATEGORY":
      const category = localStorage.getItem("category");
      const arr_category = new Array();
      if (category !== null && category !== "[]") {
        category
          .split("[")[1]
          .split("]")[0]
          .split("},")
          .map((item) => {
            const newcategory = {
              id: item
                .replace('{"id":"', "")
                .replace('"name":"', "")
                .replace("}", "")
                .replace('"', "")
                .replace('"', "")
                .split(",")[0],
              name: item
                .replace('{"id":"', "")
                .replace('"name":"', "")
                .replace("}", "")
                .replace('"', "")
                .replace('"', "")
                .split(",")[1],
            };
            arr_category.push(newcategory);
          });
        return (state = arr_category);
      }
    case "DELETE_CATEGORY":
      const categoryCLOSE = [...state];
      const cartupdate = categoryCLOSE.filter((item) => {
        return item.id !== action._id;
      });
      localStorage.setItem("category", JSON.stringify(cartupdate));
      return (state = cartupdate);
    default:
      return state;
  }
};
