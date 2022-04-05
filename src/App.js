import { useEffect, useState } from "react";
import Header from "./components/Header";
import Todo from "./components/Todo";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { en, fa } from "./language";

function App() {
  const [textCar, setTextCar] = useState("");
  const [todos, settodo] = useState([]);
  const [lang, setlang] = useState("fa");

  const [, setstatus] = useState([]);
  const handleSubmit = () => {
    if (textCar !== "" && textCar !== " ") {
      const carttodo = [...todos];
      const data = {
        id: `${Math.floor(Math.random() * 10000)}`,
        name: textCar,
        complited: false,
      };
      carttodo.push(data);
      setTextCar("");
      settodo(carttodo);
    }
  };
  const handleDeletetodo = (id) => {
    const carttodo = [...todos];
    const cartupdate = carttodo.filter((item) => {
      return item.id !== id;
    });
    settodo(cartupdate);
  };
  const handleComplitedtodo = (id) => {
    const carttodo = [...todos];
    const cartindex = carttodo.findIndex((e) => e.id === id);
    const cartfind = carttodo[cartindex];
    cartfind.complited = !cartfind.complited;
    carttodo[cartindex] = cartfind;
    settodo(carttodo);
  };

  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  console.log(transcript);
  let set = lang === "fa" ? "تنظیم کن" : "make setting";
  let deleted = lang === "fa" ? "پاک کن" : "make delete";
  let off = lang === "fa" ? "میکروفن را خاموش کن" : "make off microphone";
  if (transcript.includes(set)) {
    console.log(transcript.split("تنظیم کن")[0]);
    if (textCar !== transcript.split("تنظیم کن")[0]) {
      setTextCar(transcript.split("تنظیم کن")[0]);
    } else {
      handleSubmit();
      resetTranscript();
      setTextCar("");
    }
  }

  if (transcript.includes(deleted)) {
    setTextCar("");
    resetTranscript();
  }
  if (transcript.includes(off)) {
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
  const changeentofa = () => {
    localStorage.setItem("language", "fa");
    setlang("fa");
  };
  const changefatoen = () => {
    localStorage.setItem("language", "en");
    setlang("en");
  };
  return (
    <div>
      <Header
        listening={listening}
        handlemic={handlemic}
        lang={lang}
        changeentofa={changeentofa}
        changefatoen={changefatoen}
      >
        <div class="input-group">
          <input
            type="text"
            style={{ width: 300 }}
            className="form-control"
            value={textCar}
            onChange={(e) => setTextCar(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleSubmit}>
            {lang === "fa" ? fa.submit : en.submit}
          </button>
        </div>
      </Header>
      {transcript !== "" ? (
        <div
          className="box-text-les"
          style={lang === "fa" ? { textAlign: "right" } : { textAlign: "left" }}
        >
          {transcript}
        </div>
      ) : null}
      <br />

      <div>
        {todos
          .reverse()
          .filter((item) => item.complited === false)
          .map((e) => {
            return (
              <Todo
                lang={lang}
                idprop={e.id}
                text={e.name}
                complited={e.complited}
                handleDeletetodo={() => {
                  handleDeletetodo(e.id);
                }}
                handleComplitedtodo={() => {
                  handleComplitedtodo(e.id);
                }}
              />
            );
          })}
        <br />
        <div className="or or--x">
          {lang === "fa" ? fa.complitedtodos : en.complitedtodos}
        </div>

        {todos
          .reverse()
          .filter((item) => item.complited === true)
          .map((e) => {
            return (
              <Todo
                lang={lang}
                idprop={e.id}
                text={e.name}
                complited={e.complited}
                handleDeletetodo={() => {
                  handleDeletetodo(e.id);
                }}
                handleComplitedtodo={() => {
                  handleComplitedtodo(e.id);
                }}
              />
            );
          })}
        <br />
        <div className="or or--x">
          {lang === "fa" ? fa.Documents : en.Documents}
        </div>
        <br />
        <div
          className="alert alert-light shadow  text-center mb-3 p-5"
          style={{ width: "90%", margin: "auto", borderRadius: 10 }}
          role="alert"
        >
          {lang === "fa" ? fa.txtDocuments : en.txtDocuments}
        </div>
      </div>
    </div>
  );
}

export default App;
