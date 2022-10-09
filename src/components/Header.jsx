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
import { FormattedMessage } from "react-intl";
import Lottie from "lottie-react";
import voice from "../lottefile/15238-voice-animation.json";
import { new_todo } from "../redux/actions/counter";
import { change_text } from "./../redux/actions/counter";
import { useDispatch, useSelector } from "react-redux";
import {
  color_Icone,
  style_Them,
  style_transcript,
} from "../styles/module/style.position";
function Header() {
  const language = useSelector((state) => state.language);
  const them = useSelector((state) => state.them);
  const direction = useSelector((state) => state.direction);
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
  let SETER = language === "fa" ? "تنظیم کن" : "make setting";
  let DELETE = language === "fa" ? "پاک کن" : "make delete";
  let MICOFF = language === "fa" ? "میکروفون را خاموش کن" : "off";
  let RELOAD = language === "fa" ? "رفرش" : "reload";
  let MOVETODOAPP = language === "fa" ? "تودو اپ" : "to-do app";
  let MOVETODOAPP2 = language === "fa" ? "توتو اپ" : "tutuapp";
  let MOVEDOCUMENT = language === "fa" ? "مستندات" : "hey Arthur document";
  let MOVESETTING = language === "fa" ? "تنظیمات" : "hey Arthur setting";

  if (language === "fa") {
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
        language: language === "fa" ? "fa-IR" : "en-US",
        continuous: true,
      });
      setstatus(true);
    }
    resetTranscript();
  };

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
      <div className={`box-header ${style_Them(them)}`} role="alert">
        <div
          className="text-Head"
          onClick={() => {
            navigate("/");
          }}
        >
          {" "}
          <FormattedMessage id="title.head" />
        </div>

        <div>
          <button
            className={`btn btn-light mx-1 ${style_Them(them)}`}
            onClick={handlemic}
          >
            {listening ? (
              <div style={{ display: "flex", height: 20 }}>
                <Lottie
                  animationData={voice}
                  style={{ width: 34, height: 34, marginTop: -6 }}
                />
                <Microphone2 size="24" color={color_Icone()} />
              </div>
            ) : (
              <MicrophoneSlash size="24" color={color_Icone()} />
            )}
          </button>
          {windowSize.innerWidth > 600 ? (
            <button
              className={`btn btn-light mx-1 ${style_Them(them)}`}
              onClick={() => {
                navigate("/setting");
              }}
            >
              {windowSize.innerWidth > 600 ? (
                <FormattedMessage id="setting" />
              ) : null}
              <Setting2
                size="24"
                style={
                  windowSize.innerWidth > 600 ? { marginLeft: "5px" } : null
                }
                color={color_Icone()}
              />
            </button>
          ) : null}
          {windowSize.innerWidth > 600 ? (
            <button
              className={`btn btn-light mx-1 ${style_Them(them)}`}
              onClick={() => {
                navigate("/document");
              }}
            >
              {windowSize.innerWidth > 600 ? (
                <FormattedMessage id="document" />
              ) : null}
              <DocumentText
                size="24"
                style={
                  windowSize.innerWidth > 600 ? { marginLeft: "5px" } : null
                }
                color={color_Icone()}
              />
            </button>
          ) : null}
          {windowSize.innerWidth < 1000 ? (
            <button
              className={`btn btn-light mx-1 ${style_Them(them)}`}
              onClick={() => {
                navigate("/category");
              }}
            >
              <Category
                size="24"
                style={
                  windowSize.innerWidth > 1000 ? { marginLeft: "5px" } : null
                }
                color={color_Icone()}
              />
            </button>
          ) : null}
        </div>
      </div>
      {transcript !== "" ? (
        <div
          className={`box-text-les ${style_Them(them)}`}
          style={style_transcript(direction)}
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
