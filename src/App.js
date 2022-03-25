import { useState } from "react";
import Header from "./component/Header";
import Todo from "./component/Todo";

function App() {
  const [textCar, setTextCar] = useState();
  const [todo, settodo] = useState([]);
  const handleSubmit = () => {
    const carttodo = [...todo];
    const data = { id: `${carttodo.length}`, name: textCar, complited: false };
    carttodo.push(data);
    setTextCar("");
    if (textCar !== "" && textCar !== " ") {
      settodo(carttodo);
    }
  };
  const handleDeletetodo = (id) => {
    const carttodo = [...todo];
    const cartupdate = carttodo.filter((e) => {
      if (e.id !== id) {
        return e;
      }
    });
    settodo(cartupdate);
  };
  const handleComplitedtodo = (id) => {
    const carttodo = [...todo];
    const cartindex = carttodo.findIndex((e) => e.id == id);
    const cartfind = carttodo[cartindex];
    cartfind.complited = !cartfind.complited;
    carttodo[cartindex] = cartfind;
    settodo(carttodo);
  };
  return (
    <div>
      <Header />
      <div
        className="input-group input-group-width"
        role="group"
        aria-label="Basic example"
      >
        <input
          type="text"
          className="form-control"
          value={textCar}
          onChange={(e) => setTextCar(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSubmit}>
          submit
        </button>
      </div>
      {todo.map((e) => {
        return (
          <Todo
            key={e.id}
            car={e.name}
            complited={e.complited}
            handleDeletetodo={() => {
              handleDeletetodo(e.id);
            }}
            handleComplitedtodo={() => {
              handleComplitedtodo(e.id);
            }}
          />
        );
      })}
    </div>
  );
}

export default App;
