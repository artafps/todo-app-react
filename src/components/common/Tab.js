import React, { Fragment } from "react";
const Tab = ({
  text,
  actves,
  icon,
  onclick,
  datatoggle,
  datatarget,
  classNameNew,
  selector,
}) => {
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
          <div className="text-tab">{text}</div> {icon}
        </div>
      </div>
    </Fragment>
  );
};

export default Tab;
