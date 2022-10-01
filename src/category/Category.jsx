import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Mainlayout from "./../layout/MainLayout";

const Categorypage = () => {
  const lang = localStorage.getItem("language");
  const [windowSize, setWindowSize] = useState(getWindowSize());
  let navigate = useNavigate();
  if (windowSize.innerWidth > 1000) {
    navigate("/app");
  }
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <Fragment>
      <Mainlayout>
        {lang === "fa" ? (
          <Fragment>
            {" "}
            <div
              className="alert alert-light  border-rightW todobox "
              style={{ cursor: "pointer" }}
              role="alert"
              onClick={() => {
                navigate("/document");
              }}
            >
              <div
                className="text"
                style={{
                  textAlign: lang === "fa" ? "right" : "left",
                  width: "100%",
                }}
              >
                مستندات
              </div>
            </div>
            <div
              className="alert alert-light  border-rightW todobox "
              style={{ cursor: "pointer" }}
              role="alert"
              onClick={() => {
                navigate("/setting");
              }}
            >
              <div
                className="text"
                style={{
                  textAlign: lang === "fa" ? "right" : "left",
                  width: "100%",
                }}
              >
                تنضیمات
              </div>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div
              className="alert alert-light  border-leftW todobox"
              style={{ cursor: "pointer" }}
              role="alert"
              onClick={() => {
                navigate("/document");
              }}
            >
              <div
                className="text"
                style={{
                  textAlign: lang === "fa" ? "right" : "left",
                  width: "100%",
                }}
              >
                مستندات
              </div>
            </div>
            <div
              className="alert alert-light  border-leftW todobox"
              role="alert"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/setting");
              }}
            >
              <div
                className="text"
                style={{
                  textAlign: lang === "fa" ? "right" : "left",
                  width: "100%",
                }}
              >
                تنظیمات
              </div>
            </div>
          </Fragment>
        )}
      </Mainlayout>
    </Fragment>
  );
};
function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
export default Categorypage;
