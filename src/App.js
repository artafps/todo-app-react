import { useState } from "react";
import Header from "./component/Header";
import Todo from "./component/Todo";

function App() {
  const [textCar, setTextCar] = useState("");
  const [todos, settodo] = useState([]);
  const handleSubmit = () => {
    if (textCar !== "" && textCar !== " ") {
      const carttodo = [...todos];
      const data = {
        id: `${Math.floor(Math.random() * 10000)}`,
        name: textCar,
        complited: false,
      };
      carttodo.push(data);
      setTextCar("");

      settodo(carttodo);
    }
  };
  const handleDeletetodo = (id) => {
    const carttodo = [...todos];
    const cartupdate = carttodo.filter((item) => {
        return item.id !== id;
    });
    settodo(cartupdate);
  };
  const handleComplitedtodo = (id) => {
    const carttodo = [...todos];
    const cartindex = carttodo.findIndex((e) => e.id === id);
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
      {todos.map((e) => {
        return (
          <Todo
            idprop={e.id}
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
