export const setLanguageReducer = (state = "en", action) => {
  switch (action.type) {
    case "SET_LANGUAGE":
      localStorage.setItem("language", action.payload);
      return (state = action.payload);
    case "RELOAD_LANGUAGE":
      const getLang = localStorage.getItem("language");
      const themlocal = getLang !== null ? getLang : "en";
      return (state = themlocal);
    default:
      return state;
  }
};
