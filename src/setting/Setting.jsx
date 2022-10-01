import React, { useEffect, useState } from "react";
import { fa } from "../language";
import { en } from "../language";
import Mainlayout from "./../layout/MainLayout";

const Setting = () => {
  const [lang, setlang] = useState();
  const changeentofa = () => {
    localStorage.setItem("language", "fa");
    setlang("fa");
  };
  const changefatoen = () => {
    localStorage.setItem("language", "en");
    setlang("en");
  };
  useEffect(() => {
    const language = localStorage.getItem("language");
    if (language !== null) setlang(language);
  }, []);

  return (
    <Mainlayout>
      تغییر زبان
      <br />
      <br />
      <button
        className={
          lang === "fa" ? "btn btn-primary mx-3" : "btn btn-light mx-3"
        }
        onClick={changeentofa}
      >
        فارسی
      </button>
      <button
        className={
          lang === "en" ? "btn btn-primary mx-3" : "btn btn-light mx-3"
        }
        onClick={changefatoen}
      >
        english
      </button>
      <button
        className={
          lang === "en" ? "btn btn-primary mx-3" : "btn btn-light mx-3"
        }
        onClick={changefatoen}
      >
        Русский
      </button>
      <button
        className={
          lang === "en" ? "btn btn-primary mx-3" : "btn btn-light mx-3"
        }
        onClick={changefatoen}
      >
        俄语
      </button>
      <button
        className={
          lang === "en" ? "btn btn-primary mx-3" : "btn btn-light mx-3"
        }
        onClick={changefatoen}
      >
        俄語
      </button>
      <br />
      <br /> تغییر تم
      <br />
      <br /><button
        className={
          lang === "en" ? "btn btn-primary mx-3" : "btn btn-light mx-3"
        }
        onClick={changefatoen}
      >
        dark
      </button><button
        className={
          lang === "en" ? "btn btn-primary mx-3" : "btn btn-light mx-3"
        }
        onClick={changefatoen}
      >
        light
      </button><br />
      <br /> تغییر نوشتار
      <br />
      <br />
      <button
        className={
          lang === "en" ? "btn btn-primary mx-3" : "btn btn-light mx-3"
        }
        onClick={changefatoen}
      >
        right
      </button><button
        className={
          lang === "en" ? "btn btn-primary mx-3" : "btn btn-light mx-3"
        }
        onClick={changefatoen}
      >
        left
      </button>
    </Mainlayout>
  );
};

export default Setting;
