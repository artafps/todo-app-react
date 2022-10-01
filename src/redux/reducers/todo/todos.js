export const cartTodos = (state = [], action) => {
        
switch (action.type) {
    case "CLOSE":
      const todoCLOSE = [...state];
      const cartupdate = todoCLOSE.filter((item) => {
        return item.id !== action._id;
      });
      localStorage.setItem("todos", JSON.stringify(cartupdate));
      return (state = cartupdate);
    case "DELETE_CATEGORY_MOVE_TO_DEFAULT":
        const todos = [...state];
        const upTodos = todos.filter((item) => {
          return item.idsection !== action.idsection;
        });
        const deleteCategoryTodos = todos.filter((item) => {
          return item.idsection === action.idsection;
        });
        deleteCategoryTodos.map((item)=>{
          const data = {
            id: item.id,
            name: item.name,
            complited: item.complited,
            idsection: "default",
          }
          
           upTodos.push(data)
        })
        localStorage.setItem("todos", JSON.stringify(upTodos));
        
      return (state = upTodos); 
    case "COMOLITED":
      const todoCOMOLITED = [...state];
      const cartindex = todoCOMOLITED.findIndex((e) => e.id === action._id);
      const cartfind = todoCOMOLITED[cartindex];
      cartfind.complited = !cartfind.complited;
      todoCOMOLITED[cartindex] = cartfind;
      localStorage.setItem("todos", JSON.stringify(todoCOMOLITED));
      return (state = todoCOMOLITED);
    case "NEW_TODO":
      if (action.textTodo !== "" && action.textTodo !== " ") {
        const todoNEW = [...state];
        const data = {
          id: `${Math.floor(Math.random() * 10000)}`,
          name: action.textTodo,
          complited: false,
          idsection: action.idsection,
        };
        todoNEW.push(data);
        localStorage.setItem("todos", JSON.stringify(todoNEW));
        return (state = todoNEW);
      } else {
        return state;
      }
    case "RELOAD_TODO":
      const todos1 = localStorage.getItem("todos");
      const arrtodos = new Array();
      if (todos1 !== null && todos1 !== "[]") {
        todos1
          .split("[")[1]
          .split("]")[0]
          .split("},")
          .map((item) => {
            console.log(item
              .replace('{"id":"', "")
              .replace('"name":"', "")
              .replace('"complited":', "")
              .replace('"idsection":"', "")
              .replace("}", "")
              .replace('"', "")
              .replace('"', "")
              .replace('"', ""))
            const todo = {
              id: item
                .replace('{"id":"', "")
                .replace('"name":"', "")
                .replace('"complited":', "")
                .replace('"idsection":"', "")
                .replace("}", "")
                .replace('"', "")
                .replace('"', "")
                .split(",")[0],
              name: item
                .replace('{"id":"', "")
                .replace('"name":"', "")
                .replace('"complited":', "")
                .replace('"idsection":"', "")
                .replace("}", "")
                .replace('"', "")
                .replace('"', "")
                .split(",")[1],
              complited:
                item
                  .replace('{"id":"', "")
                  .replace('"name":"', "")
                  .replace('"complited":', "")
                  .replace('"idsection":"', "")
                  .replace("}", "")
                  .replace('"', "")
                  .replace('"', "")
                  .split(",")[2] === "true"
                  ? true
                  : false,
              idsection: item
                .replace('{"id":"', "")
                .replace('"name":"', "")
                .replace('"complited":', "")
                .replace('"idsection":"', "")
                .replace("}", "")
                .replace('"', "")
                .replace('"', "")
                .replace('"', "")
                .split(",")[3],
            };
            arrtodos.push(todo);
          });
        if (arrtodos.length > 0) {
          return (state = arrtodos);
        } else {
          return (state = []);
        }
      }
    default:
      return state;
  }
};
