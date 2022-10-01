import React, { Fragment, useRef } from "react";

const Todo = (props) => {
  return (
    <Fragment key={props.idprop}>
      {props.lang === "fa" ? (
        <div
          className={
            props.complited
              ? "alert alert-light  border-rightW todobox "
              : "alert alert-light  border-rightS todobox"
          }
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
            style={
              props.complited
                ? {
                    textAlign: props.lang === "fa" ? "right" : "left",
                    textDecoration: "line-through",
                    width: "65%",
                  }
                : {
                    textAlign: props.lang === "fa" ? "right" : "left",
                    width: "65%",
                  }
            }
          >
            {props.text}
          </div>
          <div className="text"> {" "+"|"+" "}</div>
          <div className="text">{props.idprop}</div>
          <button
            type="button"
            onClick={props.handleDeletetodo}
            className="btn-close closeicone"
            aria-label="Close"
          ></button>
        </div>
      ) : (
        <div
          className={
            props.complited
              ? "alert alert-light  border-leftW todobox "
              : "alert alert-light  border-leftS todobox"
          }
          role="alert"
        >
          <button
            type="button"
            onClick={props.handleDeletetodo}
            className="btn-close closeicone"
            aria-label="Close"
          ></button>
          <div className="text">{props.idprop}</div>
          <div className="text"> {" "+"|"+" "}</div>
          <div
            className="text"
            style={
              props.complited
                ? {
                    textAlign: props.lang === "fa" ? "right" : "left",
                    textDecoration: "line-through",

                    width: "65%",
                  }
                : {
                    textAlign: props.lang === "fa" ? "right" : "left",
                    width: "65%",
                  }
            }
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
