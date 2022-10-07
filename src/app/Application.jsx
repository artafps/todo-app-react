import { useEffect, useState } from "react";

import Mainlayout from "./../layout/MainLayout";
import { useDispatch } from "react-redux";

import NavbarLeft from "./components/navbar/NavbarLeft";
import NavbarRight from "./components/navbar/NavbarRight";
import {
  reload_category,
  reload_todo,
  reload_category_section,
} from "./../redux/actions/counter";
import InputCreateCategory from "./components/inputs/InputCreateCategory";
function Application() {
  const dispatch = useDispatch();
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    dispatch(reload_todo());
    dispatch(reload_category());
    dispatch(reload_category_section());
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
          <NavbarRight />
          <NavbarLeft />
        </div>

        <InputCreateCategory  />
      </Mainlayout>
    </div>
  );
}
function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
export default Application;
