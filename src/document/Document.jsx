import React from "react";
import Mainlayout from "./../layout/MainLayout";
import data from "../lottefile/42991-donation-box.json";
import Lottie from "lottie-react";
import { style_Aleart_SETANDDOC } from './../styles/module/style.position';
const Document = () => {
  return (
    <Mainlayout>
      <div
        className="alert alert-light shadow  text-center mb-3 p-5"
        style={style_Aleart_SETANDDOC()}
        role="alert"
      >
        مستندات
      </div>
      <br />
      <a href="https://zarinp.al/artafallahpoor">
        <Lottie
          animationData={data}
          style={{
            width: "100%",
            height: 340,
            margin: "auto",
            cursor: "pointer",
          }}
        />
      </a>
    </Mainlayout>
  );
};

export default Document;
