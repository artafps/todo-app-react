import { Fragment, useEffect, useState } from "react";
import Todo from "../../../components/Todo";

import Lottie from "lottie-react";
import todo from "../../../lottefile/56438-man-with-task-list.json";
import { useDispatch, useSelector } from "react-redux";
import { delete_todo } from "../../../redux/actions/counter";
import InputCreateTodo from "./../inputs/InputCreateTodo";
import { complited_todo } from "./../../../redux/actions/counter";
import {
  navLeft2_style,
  navLeft_style,
} from "./../../../styles/module/style.position";
const NavbarLeft = () => {
  const todos = useSelector((state) => state.todos.reverse());
  const categoryId = useSelector((state) => state.categoryID);
  const dispatch = useDispatch();

  const handleDeletetodo = (id) => {
    dispatch(delete_todo(id));
  };
  const handleComplitedtodo = (id) => {
    dispatch(complited_todo(id));
  };
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <Fragment>
      <div
        className="navLeft"
        style={navLeft_style(windowSize.innerHeight, windowSize.innerWidth)}
      >
        <div
          className="navLeft2 "
          style={navLeft2_style(windowSize.innerHeight)}
        >
          <br />
          {todos.length > 0
            ? todos
                .filter(({ idsection }) => {
                  return idsection === categoryId;
                })
                .filter((item) => item.complited === false)
                .map((e, index) => {
                  return (
                    <Todo
                      key={index}
                      idprop={e.id}
                      text={e.name}
                      complited={e.complited}
                      handleDeletetodo={() => {
                        handleDeletetodo(e.id);
                      }}
                      handleComplitedtodo={() => {
                        handleComplitedtodo(e.id);
                      }}
                    />
                  );
                })
            : null}
          {todos.filter(({ idsection }) => {
            return idsection === categoryId;
          }).length > 0 ? null : (
            <Lottie
              animationData={todo}
              style={{ width: 340, height: 340, margin: "auto" }}
            />
          )}
          <br />

          {todos.length > 0
            ? todos

                .filter(({ idsection }) => {
                  return idsection === categoryId;
                })
                .filter((item) => item.complited === true)
                .map((e, index) => {
                  return (
                    <Todo
                      key={index}
                      idprop={e.id}
                      text={e.name}
                      complited={e.complited}
                      handleDeletetodo={() => {
                        handleDeletetodo(e.id);
                      }}
                      handleComplitedtodo={() => {
                        handleComplitedtodo(e.id);
                      }}
                    />
                  );
                })
            : null}
          <br />
        </div>
        <InputCreateTodo />
      </div>
    </Fragment>
  );
};
function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
export default NavbarLeft;
