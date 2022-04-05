import React, { Fragment } from "react";

const Todo = ({ car, handleDeletetodo, complited, handleComplitedtodo, idprop}) => {
  return (
    <Fragment key={idprop} >
      <div
        className={
          complited
            ? "alert alert-success todobox"
            : "alert alert-warning todobox"
        }
        role="alert"
      >
        <div style={complited? {textDecoration:"line-through"}:null}>{car}</div>

        <br />
        <div >
          <button
            className={
                complited
                  ? "btn btn-light m-2 "
                  : "btn btn-success m-2 "
              }
            onClick={handleComplitedtodo}
          >
            Complited
          </button>

          <button
            className="btn btn-danger m-2  align-items-left"
            onClick={handleDeletetodo}
          >
            Deleted
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Todo;
