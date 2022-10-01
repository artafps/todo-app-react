import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { set_category } from "./../../redux/actions/counter";
const Tabs = ({
  text,
  actves,
  icon,
  onclick,
  datatoggle,
  datatarget,
  classNameNew,
  selector,
}) => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div className={actves} data-toggle={datatoggle} data-target={datatarget}>
        <div
          className={`tabs2 ${classNameNew}`}
          style={
            selector ? { borderLeft: "rgb(255, 43, 96) 10px solid" } : null
          }
          onMouseEnter={onclick}
        >
          <div className="text-tab">{text}</div>{" "}
            {icon}
        </div>
      </div>
    </Fragment>
  );
};

export default Tabs;
