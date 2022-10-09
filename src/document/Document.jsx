import React from "react";
import Mainlayout from "./../layout/MainLayout";
import data from "../lottefile/42991-donation-box.json";
import Lottie from "lottie-react";
import {
  style_Aleart_SETANDDOC,
  style_Them,
} from "./../styles/module/style.position";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
const Document = () => {
  const them = useSelector((state) => state.them);

  return (
    <Mainlayout>
      <div
        className={`alert alert-light shadow  text-center mb-3 p-5 ${style_Them(
          them
        )}`}
        style={style_Aleart_SETANDDOC()}
        role="alert"
      >
        <FormattedMessage id="document" />
        <br />
        <br />
        <FormattedMessage id="documenttxt" />
        <br />
        <br />
        <FormattedMessage id="documentgift" />
      </div>
      <br />
      <a href="https://zarinp.al/artafallahpoor">
        <Lottie
          animationData={data}
          style={{
            width: "100%",
            height: 150,
            margin: "auto",
            cursor: "pointer",
          }}
        />
      </a>
    </Mainlayout>
  );
};

export default Document;
