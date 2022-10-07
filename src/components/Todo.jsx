import { CloseSquare } from "iconsax-react";
import React, { Fragment } from "react";
import {
  style_TodoComplited,
  style_TodoComplitedText,
} from "../styles/module/style.position.jsx";

const Todo = (props) => {
  return (
    <Fragment key={props.idprop}>
      {"left" === "right" ? (
        <div
          className={style_TodoComplited(props.complited, "right")}
          role="alert"
        >
          <input
            class="form-check-input"
            type="checkbox"
            style={{ cursor: "pointer", borderRadius: "50px" }}
            checked={props.complited ? true : false}
            id="flexCheckDefault"
            onClick={props.handleComplitedtodo}
          />
          <div
            className="text"
            style={style_TodoComplitedText(props.complited, "right")}
          >
            {props.text}
          </div>
          <div className="text"> {" | "}</div>
          <div className="text">{props.idprop}</div>

          <button
            type="button"
            onClick={props.handleDeletetodo}
            className="btn closeicone p-0"
          >
            <CloseSquare size="34" color="#f47373" variant="Bulk" />
          </button>
        </div>
      ) : (
        <div
          className={style_TodoComplited(props.complited, "left")}
          role="alert"
        >
          <button
            type="button"
            onClick={props.handleDeletetodo}
            className="btn closeicone p-0"
          >
            <CloseSquare size="34" color="#f47373" variant="Bulk" />
          </button>
          <div className="text">{props.idprop}</div>
          <div className="text"> {" | "}</div>
          <div
            className="text"
            style={style_TodoComplitedText(props.complited, "left")}
          >
            {props.text}
          </div>
          <input
            class="form-check-input"
            type="checkbox"
            style={{ cursor: "pointer", borderRadius: "50px" }}
            checked={props.complited ? true : false}
            id="flexCheckDefault"
            onClick={props.handleComplitedtodo}
          />
        </div>
      )}
    </Fragment>
  );
};

export default Todo;
