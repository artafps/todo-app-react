import React, { Fragment, useEffect, useState } from "react";
import {
  Setting2,
  DocumentText,
  MicrophoneSlash,
  Microphone2,
  Category,
} from "iconsax-react";
import { useNavigate } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import { en, fa } from "./../language";
import Lottie from "lottie-react";
import voice from "../lottefile/15238-voice-animation.json";
import { new_todo } from "../redux/actions/counter";
import { change_text } from "./../redux/actions/counter";
import { useDispatch } from "react-redux";
function Header() {
  const [lang, setlang] = useState();
  const [textCar, setTextCar] = useState();
  const [, setstatus] = useState([]);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(new_todo(textCar));
    dispatch(change_text(""));
  };

  const [windowSize, setWindowSize] = useState(getWindowSize());

  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  let navigate = useNavigate();
  let SETER = lang === "fa" ? "تنظیم کن" : "make setting";
  let DELETE = lang === "fa" ? "پاک کن" : "make delete";
  let MICOFF = lang === "fa" ? "میکروفون را خاموش کن" : "off";
  let RELOAD = lang === "fa" ? "رفرش" : "reload";
  let MOVETODOAPP = lang === "fa" ? "تودو اپ" : "to-do app";
  let MOVETODOAPP2 = lang === "fa" ? "توتو اپ" : "tutuapp";
  let MOVEDOCUMENT = lang === "fa" ? "مستندات" : "Hey Arthur document";
  let MOVESETTING = lang === "fa" ? "تنظیمات" : "Hey Arthur setting";

  if (lang === "fa") {
    if (transcript.includes(SETER)) {
      console.log(transcript.split("تنظیم کن")[0]);
      if (textCar !== transcript.split("تنظیم کن")[0]) {
        setTextCar(transcript.split("تنظیم کن")[0]);
      } else {
        handleSubmit();
        resetTranscript();
        setTextCar("");
        setstatus(true);
      }
    }
  } else {
    if (transcript.includes(SETER)) {
      console.log(transcript.split("make setting")[0]);
      if (textCar !== transcript.split("make setting")[0]) {
        setTextCar(transcript.split("make setting")[0]);
      } else {
        handleSubmit();
        resetTranscript();
        setTextCar("");
        setstatus(true);
      }
    }
  }

  if (transcript.includes(DELETE)) {
    setTextCar("");
    resetTranscript();
  }
  if (transcript.includes(MOVETODOAPP) || transcript.includes(MOVETODOAPP2)) {
    resetTranscript();
    navigate("/");
  }

  if (transcript.includes(MOVEDOCUMENT)) {
    resetTranscript();
    navigate("/document");
  }
  if (transcript.includes(MOVESETTING)) {
    resetTranscript();
    navigate("/setting");
  }
  if (transcript.includes(RELOAD)) {
    window.location.reload(false);
  }
  if (transcript.includes(MICOFF)) {
    SpeechRecognition.stopListening();
    setTextCar("");
    resetTranscript();
  }
  const handlemic = () => {
    if (listening) {
      SpeechRecognition.stopListening();
      setstatus(false);
    } else {
      SpeechRecognition.startListening({
        language: lang === "fa" ? "fa-IR" : "en-US",
        continuous: true,
      });
      setstatus(true);
    }
    resetTranscript();
  };

  useEffect(() => {
    const language = localStorage.getItem("language");
    if (language !== null) setlang(language);
  }, []);

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
      <div className="box-header" role="alert">
        {windowSize.innerWidth > 600 ? (
          <div
            className="text-Head"
            onClick={() => {
              navigate("/");
            }}
          >
            {" "}
            {lang === "fa" ? fa.textHeader : en.textHeader}
          </div>
        ) : (
          <div
            className="text-Head"
            onClick={() => {
              navigate("/app");
            }}
          >
            {" "}
            {lang === "fa" ? fa.textHeader : en.textHeader}
          </div>
        )}
        <div>
          <button className="btn btn-light mx-1" onClick={handlemic}>
            {listening ? (
              <div style={{ display: "flex", height: 20 }}>
                <Lottie
                  animationData={voice}
                  style={{ width: 34, height: 34, marginTop: -6 }}
                />
                <Microphone2 size="24" color="#0d6efd" />
              </div>
            ) : (
              <MicrophoneSlash size="24" color="#0d6efd" />
            )}
          </button>
          {windowSize.innerWidth > 600 ? (
            <button
              className="btn btn-light mx-1"
              onClick={() => {
                navigate("/setting");
              }}
            >
              {windowSize.innerWidth > 600 ? "تنضیمات" : null}
              <Setting2
                size="24"
                style={
                  windowSize.innerWidth > 600 ? { marginLeft: "5px" } : null
                }
                color="#0d6efd"
              />
            </button>
          ) : null}
          {windowSize.innerWidth > 600 ? (
            <button
              className="btn btn-light mx-1"
              onClick={() => {
                navigate("/document");
              }}
            >
              {windowSize.innerWidth > 600 ? "مستندات" : null}
              <DocumentText
                size="24"
                style={
                  windowSize.innerWidth > 600 ? { marginLeft: "5px" } : null
                }
                color="#0d6efd"
              />
            </button>
          ) : null}
          {windowSize.innerWidth < 1000 ? (
            <button
              className="btn btn-light mx-1"
              onClick={() => {
                navigate("/category");
              }}
            >
              <Category
                size="24"
                style={
                  windowSize.innerWidth > 1000 ? { marginLeft: "5px" } : null
                }
                color="#0d6efd"
              />
            </button>
          ) : (
            null
          )}
        </div>
      </div>
      {transcript !== "" ? (
        <div
          className="box-text-les"
          style={lang === "fa" ? { textAlign: "right" } : { textAlign: "left" }}
        >
          {transcript}
        </div>
      ) : null}
      <br />
    </Fragment>
  );
}
function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
export default Header;
