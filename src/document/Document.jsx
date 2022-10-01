import React from "react";
import { fa } from "../language";
import { en } from "./../language";
import Mainlayout from "./../layout/MainLayout";
import data from "../lottefile/42991-donation-box.json";
import Lottie from "lottie-react";
const Document = () => {
  const lang = localStorage.getItem("language");
  return (
    <Mainlayout>
      مستندات
      <br />
      <br />
      <div
        className="alert alert-light shadow  text-center mb-3 p-5"
        style={{ width: "90%", margin: "auto", borderRadius: 10 }}
        role="alert"
      >
        {lang === "fa" ? fa.txtDocuments : en.txtDocuments}
      </div>
      <br />
      <a href="https://zarinp.al/artafallahpoor">
        <Lottie
          animationData={data}
          style={{
            width: 1040,
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
