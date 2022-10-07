export const setThemReducer = (state = "dark", action) => {
  switch (action.type) {
    case "SET_THEM":
      localStorage.setItem("them", action.payload);
      return (state = action.payload);
    case "RELOAD_THEM":
      const getThem = localStorage.getItem("them");
      const themlocal = getThem !== null ? getThem : "dark";
      return (state = themlocal);
    default:
      return state;
  }
};
