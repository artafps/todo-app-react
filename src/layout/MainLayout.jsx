import React, { useEffect, useState } from "react";
import { style_Them } from "../styles/module/style.position";
import Header from "./../components/Header";
import { useSelector } from "react-redux";

const Mainlayout = ({ children, inputTodoJSX }) => {
  const them = useSelector((state) => state.them);
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
    <div
      className={style_Them(them)}
      style={{ height: `${windowSize.innerHeight }px` }}
    >
      <Header inputTodoJSX={inputTodoJSX} />
      {children}
    </div>
  );
};
function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
export default Mainlayout;
