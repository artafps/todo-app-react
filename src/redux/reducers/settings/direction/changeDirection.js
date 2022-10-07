export const setDirectionReducer = (state = "left", action) => {
  switch (action.type) {
    case "SET_DIRECTION":
      localStorage.setItem("direction", action.payload);
      return (state = action.payload);
    case "RELOAD_DIRECTION":
      const getdir = localStorage.getItem("direction");
      const dirlocal = getdir !== null ? getdir : "left";
      return (state = dirlocal);
    default:
      return state;
  }
};
