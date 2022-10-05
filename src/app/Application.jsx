import { useEffect, useState } from "react";
import Todo from "../components/Todo";

import Mainlayout from "./../layout/MainLayout";
import Tab from "../components/common/Tab";
import { CloseSquare, CalendarAdd, Send2 } from "iconsax-react";
import Lottie from "lottie-react";
import todo from "../lottefile/56438-man-with-task-list.json";
import { useDispatch, useSelector } from "react-redux";
import {
  change_text,
  change_text_category,
  delete_category,
  delete_category_mtod,
  delete_todo,
  new_category,
  new_todo,
  reload_category_section,
  set_category,
} from "../redux/actions/counter";
import {
  reload_category,
  reload_todo,
  complited_todo,
} from "./../redux/actions/counter";
function Application() {
  const [lang, setlang] = useState([]);
  const todos = useSelector((state) => state.todos.reverse());
  const taxt = useSelector((state) => state.txttodo);
  const taxtcategory = useSelector((state) => state.txtcategory);
  const categorys = useSelector((state) => state.categorys);
  const categoryId = useSelector((state) => state.categoryID);

  const [windowSize, setWindowSize] = useState(getWindowSize());
  const dispatch = useDispatch();
  const handleDeletetodo = (id) => {
    dispatch(delete_todo(id));
  };
  const handleSubmit = () => {
    dispatch(new_todo(taxt, categoryId));
    dispatch(change_text(""));
  };

  const handleComplitedtodo = (id) => {
    dispatch(complited_todo(id));
  };
  useEffect(() => {
    const language = localStorage.getItem("language");
    if (language !== null) setlang(language);
    dispatch(reload_todo());
    dispatch(reload_category());
    dispatch(reload_category_section());
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
    <div>
      <Mainlayout>
        <div
          className="continer"
          style={{ height: `${windowSize.innerHeight - 63}px` }}
        >
          <div
            className="navLeft"
            style={
              windowSize.innerWidth > 1000
                ? { height: `${windowSize.innerHeight - 63}px` }
                : { width: "100%" }
            }
          >
            <div
              className="navLeft2 draggable-list"
              style={{
                height: `${windowSize.innerHeight - 145}px`,
                overflow: "auto",
              }}
            >
              <br />
              {todos.length > 0 ? (
                todos
                  
                  .filter(({ idsection }) => {
                    return idsection === categoryId;
                  })
                  .filter((item) => item.complited === false)
                  .map((e, index) => {
                    console.log(e);
                    return (
                      <Todo
                        key={index}
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
                  })
              ) :null}
              {todos.filter(({ idsection }) => {
                return idsection === categoryId;
              }).length > 0 ? null : (
                <Lottie
                  animationData={todo}
                  style={{ width: 340, height: 340, margin: "auto" }}
                />
              )}
              <br />

              {todos.length > 0
                ? todos
                    
                    .filter(({ idsection }) => {
                      return idsection === categoryId;
                    })
                    .filter((item) => item.complited === true)
                    .map((e, index) => {
                      console.log(e);
                      return (
                        <Todo
                          key={index}
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
                    })
                : null}
              <br />
            </div>
            <div
              className={"alert alert-primary  shadow todobox "}
              role="alert"
            >
              <div class="input-group">
                <input
                  type="text"
                  style={windowSize.innerWidth > 800 ? { width: "80%" } : null}
                  className="form-control"
                  value={taxt}
                  onChange={(e) => dispatch(change_text(e.target.value))}
                />
                <button className="btn btn-primary" onClick={handleSubmit}>
                  <Send2 size="24" color="#fff" />
                </button>
              </div>
            </div>
          </div>

          <div
            className="navRight"
            style={
              windowSize.innerWidth > 1000
                ? { height: `${windowSize.innerHeight - 63}px` }
                : { display: "none" }
            }
          >
            {categorys.map((item) => {
              return (
                <Tab
                  text={item.name}
                  onclick={() => dispatch(set_category(item.id))}
                  selector={categoryId === item.id ? true : false}
                  icon={
                    <CloseSquare
                      size="24"
                      color="#f47373"
                      variant="Bulk"
                      onClick={() => {
                        dispatch(set_category("default"));
                        dispatch(delete_category_mtod(item.id));
                        dispatch(delete_category(item.id));
                      }}
                    />
                  }
                ></Tab>
              );
            })}
            <Tab
              text={"default"}
              selector={categoryId == "default" ? true : false}
              onclick={() => dispatch(set_category("default"))}
            ></Tab>
            <Tab
              datatoggle="modal"
              datatarget="#exampleModalCenter"
              classNameNew={"dashed"}
              text={
                <div>
                  <CalendarAdd size="32" color="#0d6efd" variant="Bulk" /> Add
                </div>
              }
            ></Tab>
          </div>
        </div>

        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Set Category
                </h5>
              </div>
              <div class="modal-body">
                <label>Category</label>
                <input
                  type="text"
                  style={{ width: "100%" }}
                  className="form-control"
                  value={taxtcategory}
                  onChange={(e) =>
                    dispatch(change_text_category(e.target.value))
                  }
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={() => dispatch(change_text_category(""))}
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-dismiss="modal"
                  onClick={() => {
                    dispatch(new_category(taxtcategory));
                    dispatch(change_text_category(""));
                  }}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </Mainlayout>
    </div>
  );
}
function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
export default Application;
