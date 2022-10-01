export const textBoxNewTodoReducer = (state = '', action) => {
    switch (action.type) {
        case "CHANGE_TEXT_TODO":
            return state = action.payload;
        default:
            return state;
    }
};
