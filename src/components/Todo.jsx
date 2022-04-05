import React, { Fragment } from "react";

const Todo = ({
  text,
  handleDeletetodo,
  complited,
  handleComplitedtodo,
  idprop,
  lang,
}) => {
  return (
    <Fragment key={idprop}>
      {lang === "fa" ? (
        <div
          className={
            complited
              ? "alert alert-success shadow todobox "
              : "alert alert-light shadow todobox"
          }
          role="alert"
        >
          <div>
            <button
              className={
                complited ? "btn btn-light m-2 " : "btn btn-success m-2 "
              }
              onClick={handleComplitedtodo}
            >
              {lang === "fa" ? "انجام شد" : "Complited"}
            </button>

            <button
              className="btn btn-danger m-2  align-items-left"
              onClick={handleDeletetodo}
            >
              {lang === "fa" ? "حذف" : "Delete"}
            </button>
          </div>
          <div
            style={
              complited
                ? {
                    textAlign: lang === "fa" ? "right" : "left",
                    textDecoration: "line-through",
                    paddingRight: 10,
                  }
                : {
                    textAlign: lang === "fa" ? "right" : "left",
                    paddingRight: 10,
                  }
            }
          >
            {text}
          </div>
        </div>
      ) : (
        <div
          className={
            complited
              ? "alert alert-success shadow todobox "
              : "alert alert-light shadow todobox"
          }
          role="alert"
        >
          <div
            style={
              complited
                ? {
                    textAlign: lang === "fa" ? "right" : "left",
                    textDecoration: "line-through",
                    paddingRight: 10,
                  }
                : {
                    textAlign: lang === "fa" ? "right" : "left",
                    paddingRight: 10,
                  }
            }
          >
            {text}
          </div>
          <div>
            <button
              className={
                complited ? "btn btn-light m-2 " : "btn btn-success m-2 "
              }
              onClick={handleComplitedtodo}
            >
              {lang === "fa" ? "انجام شد" : "Complited"}
            </button>

            <button
              className="btn btn-danger m-2  align-items-left"
              onClick={handleDeletetodo}
            >
              {lang === "fa" ? "حذف" : "Delete"}
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Todo;
