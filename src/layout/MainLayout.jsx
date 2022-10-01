import React from "react";
import Header from "./../components/Header";

const Mainlayout = ({ children,inputTodoJSX }) => {
  return (
    <div>
      <Header inputTodoJSX={inputTodoJSX}  />
      {children}
    </div>
  );
};

export default Mainlayout;
