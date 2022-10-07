import { Fragment, useEffect, useState } from "react";

import Tab from "../../../components/common/Tab";
import { CloseSquare, CalendarAdd } from "iconsax-react";
import { useDispatch, useSelector } from "react-redux";
import {
  delete_category,
  delete_category_mtod,
  set_category,
} from "../../../redux/actions/counter";
import { navRight_style } from "../../../styles/module/style.position";
import {
  color_Icone_close,
  color_Icone,
} from "./../../../styles/module/style.position";
const NavbarRight = () => {
  const categorys = useSelector((state) => state.categorys);
  const categoryId = useSelector((state) => state.categoryID);
  const dispatch = useDispatch();
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
    <Fragment>
      <div className="navRight" style={navRight_style(windowSize.innerWidth)}>
        {categorys.map((item) => {
          return (
            <Tab
              text={item.name}
              onclick={() => dispatch(set_category(item.id))}
              selector={categoryId === item.id ? true : false}
              icon={
                <CloseSquare
                  size="34"
                  color={color_Icone_close()}
                  variant="Bulk"
                  onClick={() => {
                    dispatch(set_category("default"));
                    dispatch(delete_category_mtod(item.id));
                    dispatch(delete_category(item.id));
                  }}
                />
              }
            ></Tab>
          );
        })}
        <Tab
          text={"default"}
          selector={categoryId === "default" ? true : false}
          onclick={() => dispatch(set_category("default"))}
        ></Tab>
        <Tab
          datatoggle="modal"
          datatarget="#exampleModalCenter"
          text={"Add"}
          icon={<CalendarAdd size="32" color={color_Icone()} variant="Bulk" />}
        ></Tab>
      </div>
    </Fragment>
  );
};
function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
export default NavbarRight;
