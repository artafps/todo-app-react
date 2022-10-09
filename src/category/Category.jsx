import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Mainlayout from "./../layout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  change_text_category,
  delete_category,
  delete_category_mtod,
  new_category,
  reload_category_section,
  set_category,
  reload_category,
} from "../redux/actions/counter";
import {
  CalendarAdd,
  CloseSquare,
  Setting2,
  DocumentText,
} from "iconsax-react";
import Tab from "./../components/common/Tab";
import { color_Icone } from "../styles/module/style.position";
import { FormattedMessage } from 'react-intl';

const Categorypage = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const taxtcategory = useSelector((state) => state.txtcategory);
  const categorys = useSelector((state) => state.categorys);
  const categoryId = useSelector((state) => state.categoryID);
  let navigate = useNavigate();
  let dispatch = useDispatch();
  if (windowSize.innerWidth > 1000) {
    navigate("/");
  }
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    dispatch(reload_category());
    dispatch(reload_category_section());
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <Fragment>
      <Mainlayout>
        <Fragment>
          <Tab
            onclick={() => {
              navigate("/document");
            }}
            text={<FormattedMessage id="document" />}
            icon={
              <DocumentText size="32" color={color_Icone()} variant="Bulk" />
            }
          ></Tab>
          <Tab
            onclick={() => {
              navigate("/setting");
            }}
            text={<FormattedMessage id="setting" />}
            icon={<Setting2 size="32" color={color_Icone()} variant="Bulk" />}
          ></Tab>
          <br />
          دسته بندی کارها
          <br />
          <Tab
            datatoggle="modal"
            datatarget="#exampleModalCenter"
            text={<FormattedMessage id="add.nav" />}
            icon={
              <CalendarAdd size="32" color={color_Icone()} variant="Bulk" />
            }
          ></Tab>
          <br />
          {categorys.map((item) => {
            return (
              <Fragment>
                <Tab
                  text={item.name}
                  selector={categoryId === item.id ? true : false}
                  onclick={() => {
                    dispatch(set_category(item.id));
                    navigate("/");
                  }}
                  icon={
                    <CloseSquare
                      size="34"
                      color="#f47373"
                      variant="Bulk"
                      style={{ marginRight: 15 }}
                      onClick={() => {
                        dispatch(set_category("default"));
                        dispatch(delete_category_mtod(item.id));
                        dispatch(delete_category(item.id));
                      }}
                    />
                  }
                ></Tab>
              </Fragment>
            );
          })}
          <Tab
            text={<FormattedMessage id="default.nav" />}
            selector={categoryId === "default" ? true : false}
            onclick={() => {
              dispatch(set_category("default"));
              navigate("/");
            }}
          ></Tab>
          <br />
          <br />
        </Fragment>
      </Mainlayout>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Set Category
              </h5>
            </div>
            <div className="modal-body">
              <label>Category</label>
              <input
                type="text"
                style={{ width: "100%" }}
                className="form-control"
                value={taxtcategory}
                onChange={(e) => dispatch(change_text_category(e.target.value))}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={() => dispatch(change_text_category(""))}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
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
    </Fragment>
  );
};
function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
export default Categorypage;
