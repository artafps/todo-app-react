import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import {
  style_Them,
  tabs_Direction,
  tabs_DirectionText,
  tabs_Selector,
} from "../../styles/module/style.position";
const Tab = ({
  key,
  text,
  icon,
  onclick,
  datatoggle,
  datatarget,
  classNameNew,
  selector,
}) => {
  const direction = useSelector((state) => state.direction);
  const them = useSelector((state) => state.them);
  return (
    <Fragment key={key}>
      <div
        data-toggle={datatoggle}
        
        data-target={datatarget}
      >
        {direction === "right" ? (
          <div
            className={tabs_Direction(them,direction, classNameNew)}
            style={tabs_Selector(direction, selector)}
          >
            <div className="m-2"> {icon} </div>
            <div onClick={onclick} className={tabs_DirectionText(direction)}>
              {text}
            </div>
          </div>
        ) : (
          <div
            className={tabs_Direction(them,direction, classNameNew)}
            style={tabs_Selector(direction, selector)}
          >
            <div onClick={onclick} className={tabs_DirectionText(direction)}>
              {text}
            </div>
            <div className="m-2"> {icon} </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Tab;
