import React, { useEffect, useState } from "react";
import Mainlayout from "./../layout/MainLayout";
import {
  styele_ClassName_btn_lang,
  styele_ClassName_them,
  style_Aleart_SETANDDOC,
} from "./../styles/module/style.position";

const Setting = () => {
  const [language, setlang] = useState();
  const [them, setthem] = useState();

  useEffect(() => {
    const language = localStorage.getItem("language");
    if (language !== null) setlang(language);
  }, []);

  return (
    <Mainlayout>
      <div
        className="alert alert-light shadow  text-center mb-3 p-5"
        style={style_Aleart_SETANDDOC()}
        role="alert"
      >
        تغییر زبان
        <br />
        <br />
        <button className={styele_ClassName_btn_lang(language, "fa")}>
          فارسی
        </button>
        <button className={styele_ClassName_btn_lang(language, "en")}>
          English
        </button>
        <button className={styele_ClassName_btn_lang(language, "Ру")}>
          Русский
        </button>
        <button className={styele_ClassName_btn_lang(language, "俄语")}>
          俄语
        </button>
        <button className={styele_ClassName_btn_lang(language, "俄語")}>
          俄語
        </button>
        <button className={styele_ClassName_btn_lang(language, "arb")}>
          العربی
        </button>
      </div>
      <div
        className="alert alert-light shadow  text-center mb-3 p-5"
        style={style_Aleart_SETANDDOC()}
        role="alert"
      >
        تغییر تم
        <br />
        <br />
        <button className={styele_ClassName_them(them, "dark")}>dark</button>
        <button className={styele_ClassName_them(them, "light")}>light</button>
        <br />
      </div>
    </Mainlayout>
  );
};

export default Setting;
