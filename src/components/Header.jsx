import React from "react";

function Header({ children, handlemic, listening }) {
  return (
    <div className="box-header" role="alert">
      <div className="text-Head">
        {" "}
        {listening ? (
          <div
            class="spinner-grow text-danger "
            style={{ width: 15, height: 15, marginRight: 10 }}
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : null}
        Todo App / In React.js
      </div>
      <div>{children}</div>
      <button className="btn btn-primary" onClick={handlemic}>
        on/of microphone
      </button>
    </div>
  );
}

export default Header;
