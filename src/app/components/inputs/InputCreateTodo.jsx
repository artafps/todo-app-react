import { Fragment, useEffect, useState } from "react";

import { Send2 } from "iconsax-react";
import { useDispatch, useSelector } from "react-redux";
import { change_text, new_todo } from "../../../redux/actions/counter";
import {
  color_sender,
  input_CreateTodo,
  style_Them,
} from "../../../styles/module/style.position";

const InputCreateTodo = () => {
  const taxt = useSelector((state) => state.txttodo);
  const categoryId = useSelector((state) => state.categoryID);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(new_todo(taxt, categoryId));
    dispatch(change_text(""));
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
  const direction = useSelector((state) => state.direction);
  const them = useSelector((state) => state.them);

  return (
    <Fragment>
      <div className={`alert alert-primary  shadow todobox ${style_Them(them)}`} role="alert">
        {direction === "right" ? (
          <div className="input-group">
            <button className="btn btn-primary" onClick={handleSubmit}>
              <Send2 size="24" color={color_sender()} />
            </button>{" "}
            <input
              type="text "
              style={input_CreateTodo(windowSize.innerWidth,direction)}
              className={`form-control ${style_Them(them)}`}
              value={taxt}
              onChange={(e) => dispatch(change_text(e.target.value))}
            />
          </div>
        ) : (
          <div className="input-group">
            <input
              type="text "
              style={input_CreateTodo(windowSize.innerWidth,direction)}
              className={`form-control ${style_Them(them)}`}
              value={taxt}
              onChange={(e) => dispatch(change_text(e.target.value))}
            />
            <button className="btn btn-primary" onClick={handleSubmit}>
              <Send2 size="24" color={color_sender()} />
            </button>
          </div>
        )}
      </div>
    </Fragment>
  );
};
function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
export default InputCreateTodo;
