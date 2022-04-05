import React from "react";
import { en, fa } from "./../language";

function Header({
  children,
  handlemic,
  listening,
  lang,
  changefatoen,
  changeentofa,
}) {
  return (
    <div className="box-header" role="alert">
      <div className="text-Head">
        {" "}
        {listening ? (
          <div
            class="spinner-grow text-danger "
            style={{ width: 15, height: 15, marginRight: 10 }}
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : null}
        {lang === "fa" ? fa.textHeader : en.textHeader}
      </div>
      <div>{children}</div>
      <div>
        <button className="btn btn-primary mx-3" onClick={handlemic}>
          {lang === "fa" ? fa.micbutton : en.micbutton}
        </button>
        <button
          className={
            lang === "fa" ? "btn btn-primary mx-3" : "btn btn-light mx-3"
          }
          onClick={changeentofa}
        >
          {lang === "fa" ? fa.langFA : en.langFA}
        </button>
        <button
          className={
            lang === "en" ? "btn btn-primary mx-3" : "btn btn-light mx-3"
          }
          onClick={changefatoen}
        >
          {lang === "fa" ? fa.langEN : en.langEN}
        </button>
      </div>
    </div>
  );
}

export default Header;
