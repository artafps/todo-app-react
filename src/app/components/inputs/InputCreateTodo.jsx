import { Fragment, useEffect, useState } from "react";

import { Send2 } from "iconsax-react";
import { useDispatch, useSelector } from "react-redux";
import { change_text, new_todo } from "../../../redux/actions/counter";
import {
  color_sender,
  input_CreateTodo,
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

  return (
    <Fragment>
      <div className={"alert alert-primary  shadow todobox "} role="alert">
        <div class="input-group">
          <input
            type="text"
            style={input_CreateTodo(windowSize.innerWidth)}
            className="form-control"
            value={taxt}
            onChange={(e) => dispatch(change_text(e.target.value))}
          />
          <button className="btn btn-primary" onClick={handleSubmit}>
            <Send2 size="24" color={color_sender()} />
          </button>
        </div>
      </div>
    </Fragment>
  );
};
function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
export default InputCreateTodo;
