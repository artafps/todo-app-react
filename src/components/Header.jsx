import React from "react";

function Header({ children }) {
  const handlemic = () => {
    console.log("mic");
  };
  return (
    <div className="box-header" role="alert">
      Todo App / In React.js
      <div>{children}</div>
      <button className="btn btn-primary" onClick={handlemic}>
        on/of microphone
      </button>
    </div>
  );
}

export default Header;
