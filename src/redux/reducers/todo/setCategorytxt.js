export const textCategoryReducer = (state = '', action) => {
    switch (action.type) {
        case "CHANGE_TEXT_CATEGORY":
            return state = action.payload;
        default:
            return state;
    }
};
