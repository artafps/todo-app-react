import Mainlayout from "./../layout/MainLayout";
import { useSelector, useDispatch } from "react-redux";
import {
  set_direction,
  set_language,
  set_them,
} from "../redux/actions/counter";
import { FormattedMessage } from "react-intl";
import {
  styele_ClassName_btn_lang,
  styele_ClassName_them,
  styele_color_them,
  style_Aleart_SETANDDOC,
  style_Them,
} from "./../styles/module/style.position";
import { Moon, Sun1 } from "iconsax-react";

const Setting = () => {
  const language = useSelector((state) => state.language);
  const them = useSelector((state) => state.them);
  const dispatch = useDispatch();
  const changeLang = (lang) => {
    dispatch(set_language(lang));
    if (lang === "fa-IR" || lang === "ar-UD") {
      dispatch(set_direction("right"));
    } else {
      dispatch(set_direction("left"));
    }
  };
  return (
    <Mainlayout>
      <div
        className={`alert alert-light shadow  text-center mb-3 p-5 ${style_Them(
          them
        )}`}
        style={style_Aleart_SETANDDOC()}
        role="alert"
      >
        <FormattedMessage id="changeLanguage" />
        <br />
        <br />
        <button
          className={`${style_Them(them)} ${styele_ClassName_btn_lang(
            them,
            language,
            "fa-IR"
          )} `}
          onClick={() => {
            changeLang("fa-IR");
          }}
        >
          Persian
        </button>
        <button
          className={`${style_Them(them)} ${styele_ClassName_btn_lang(
            them,
            language,
            "en-US"
          )} `}
          onClick={() => {
            changeLang("en-US");
          }}
        >
          English
        </button>
        <button
          className={`${style_Them(them)} ${styele_ClassName_btn_lang(
            them,
            language,
            "py-RU"
          )} `}
          onClick={() => {
            changeLang("py-RU");
          }}
        >
          Russian
        </button>
        <button
          className={`${style_Them(them)} ${styele_ClassName_btn_lang(
            them,
            language,
            "sim-CH"
          )} `}
          onClick={() => {
            changeLang("sim-CH");
          }}
        >
          Chinese (Simplified)
        </button>
        <button
          className={`${style_Them(them)} ${styele_ClassName_btn_lang(
            them,
            language,
            "tra-CH"
          )} `}
          onClick={() => {
            changeLang("tra-CH");
          }}
        >
          Chinese (Traditional)
        </button>
        <button
          className={`${style_Them(them)} ${styele_ClassName_btn_lang(
            them,
            language,
            "ar-UD"
          )} `}
          onClick={() => {
            changeLang("ar-UD");
          }}
        >
          Arabic
        </button>
      </div>
      <div
        className={`alert alert-light shadow  text-center mb-3 p-5  ${style_Them(
          them
        )}`}
        style={style_Aleart_SETANDDOC()}
        role="alert"
      >
        <FormattedMessage id="changeThem" />

        <br />
        <br />
        <button
          className={`${style_Them(them)} ${styele_ClassName_them(
            them,
            "dark"
          )}`}
          onClick={() => dispatch(set_them("dark"))}
        >
          <Moon
            size="24"
            variant="Bold"
            color={styele_color_them(them, "dark")}
          />
        </button>
        <button
          className={`${style_Them(them)} ${styele_ClassName_them(
            them,
            "light"
          )}`}
          onClick={() => dispatch(set_them("light"))}
        >
          <Sun1
            size="24"
            variant="Bold"
            color={styele_color_them(them, "light")}
          />
        </button>
        <br />
      </div>
    </Mainlayout>
  );
};

export default Setting;
