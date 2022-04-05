import React from "react";
import { en, fa } from "./../language";

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
      <div>
        <button className="btn btn-primary mx-3" onClick={handlemic}>
          on/of microphone
        </button>
        <button className="btn btn-light mx-3" >Persian</button>
        <button className="btn btn-light">English</button>
      </div>
    </div>
  );
}

export default Header;
