import React, { Fragment } from "react";
import {
  tabs_Direction,
  tabs_DirectionText,
  tabs_Selector,
} from "../../styles/module/style.position";
const Tab = ({
  text,
  icon,
  onclick,
  datatoggle,
  datatarget,
  classNameNew,
  selector,
}) => {
  return (
    <Fragment>
      <div data-toggle={datatoggle} data-target={datatarget}>
        {"right" === "right" ? (
          <div
            className={tabs_Direction("right", classNameNew)}
            style={tabs_Selector("right", selector)}
          >
            <div className="m-2"> {icon} </div>
            <div onClick={onclick} className={tabs_DirectionText("right")}>{text}</div>
          </div>
        ) : (
          <div
            className={tabs_Direction("left", classNameNew)}
            style={tabs_Selector("left", selector)}
          >
            <div  onClick={onclick} className={tabs_DirectionText("left")}>{text}</div>
            <div className="m-2"> {icon} </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Tab;
