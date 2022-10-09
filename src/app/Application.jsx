import { useEffect, useState } from "react";

import Mainlayout from "./../layout/MainLayout";
import { useSelector } from "react-redux";

import NavbarLeft from "./components/navbar/NavbarLeft";
import NavbarRight from "./components/navbar/NavbarRight";

import InputCreateCategory from "./components/inputs/InputCreateCategory";
function Application() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const direction = useSelector((state) => state.direction);

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
    <div>
      <Mainlayout>
        <div
          className="continer"
          style={{ height: `${windowSize.innerHeight - 63}px` }}
        >
          {direction === "left" ? <NavbarRight /> : <NavbarLeft />}{" "}
          {direction === "left" ? <NavbarLeft /> : <NavbarRight />}
        </div>

        <InputCreateCategory />
      </Mainlayout>
    </div>
  );
}
function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
export default Application;
