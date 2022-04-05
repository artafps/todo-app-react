import { useState } from "react";
import Header from "./components/Header";
import Todo from "./components/Todo";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function App() {
  const [textCar, setTextCar] = useState("");
  const [time, settime] = useState("");
  const [todos, settodo] = useState([]);
  const [status, setstatus] = useState([]);
  const handleSubmit = () => {
    if (textCar !== "" && textCar !== " ") {
      const carttodo = [...todos];
      const data = {
        id: `${Math.floor(Math.random() * 10000)}`,
        name: textCar,
        complited: false,
        clock: "00:00",
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

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  console.log(transcript);

  if (transcript.includes("تنظیم کن")) {
    console.log(transcript.split("تنظیم کن")[0]);
    if (textCar !== transcript.split("تنظیم کن")[0]) {
      setTextCar(transcript.split("تنظیم کن")[0]);
    } else {
      handleSubmit();
      resetTranscript();
      setTextCar("");
    }
  }
  if (transcript.includes("پاک کن")) {
    setTextCar("");
    resetTranscript();
  }
  const handlemic = () => {
    if (listening) {
      SpeechRecognition.stopListening();
      setstatus(false);
    } else {
      SpeechRecognition.startListening({ language: "fa-IR", continuous: true });
      setstatus(true);
    }
    resetTranscript();
  };

  return (
    <div>
      <Header listening={listening} handlemic={handlemic}>
        <div class="input-group">
          <input
            type="text"
            style={{ width: 300 }}
            className="form-control"
            value={textCar}
            onChange={(e) => setTextCar(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleSubmit}>
            submit
          </button>
        </div>
      </Header>
        {transcript !== "" ? (
          <div className="box-text-les">{transcript}</div>
        ) : null}
      <br />

      <div>
        {todos
          .reverse()
          .filter((item) => item.complited === false)
          .map((e) => {
            return (
              <Todo
                idprop={e.id}
                car={e.name}
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
        <div className="or or--x" aria-role="presentation">
          complited todos
        </div>
        {todos
          .reverse()
          .filter((item) => item.complited === true)
          .map((e) => {
            return (
              <Todo
                idprop={e.id}
                car={e.name}
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
      </div>
    </div>
  );
}

export default App;
