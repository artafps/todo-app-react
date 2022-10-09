import { Route, Routes } from "react-router-dom";
import Application from "./app/Application";
import Document from "./document/Document";
import Setting from "./setting/Setting";
import Categorypage from "./category/Category";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IntlProvider } from "react-intl";
import English from "./language/en-US.json";
import Persian from "./language/fa-IR.json";
import Rusian from "./language/py-RU.json";
import Ch_sim from "./language/sim-CH.json";
import Ch_tra from "./language/tra-CH.json";
import Arabic from "./language/ar-UD.json";

import {
  reload_category,
  reload_category_section,
  reload_direction,
  reload_language,
  reload_them,
  reload_todo,
} from "./redux/actions/counter";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(reload_todo());
    dispatch(reload_category());
    dispatch(reload_category_section());
    dispatch(reload_direction());
    dispatch(reload_language());
    dispatch(reload_them());
  }, []);
  const locel = navigator.language;

  const language = useSelector((state) => state.language);
  let lang;
  if (language === "fa-IR") {
    lang = Persian;
  } else if (language === "py-RU") {
    lang = Rusian;
  } else if (language === "sim-CH") {
    lang = Ch_sim;
  } else if (language === "tra-CH") {
    lang = Ch_tra;
  } else if (language === "ar-UD") {
    lang = Arabic;
  } else {
    lang = English;
  }
  return (
    <IntlProvider messages={lang}>
      <div>
        <Routes>
          <Route path="/setting" exact element={<Setting />} />
          <Route path="/" exact element={<Application />} />
          <Route path="/document" exact element={<Document />} />
          <Route path="/category" exact element={<Categorypage />} />
        </Routes>
      </div>{" "}
    </IntlProvider>
  );
}

export default App;
