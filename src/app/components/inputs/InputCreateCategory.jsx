import React, { Fragment } from "react";

import { useDispatch, useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";

import {
  change_text_category,
  new_category,
} from "../../../redux/actions/counter";
import { style_Them } from "../../../styles/module/style.position";

const InputCreateCategory = () => {
  const taxtcategory = useSelector((state) => state.txtcategory);
  const direction = useSelector((state) => state.direction);
  const them = useSelector((state) => state.them);
  const dispatch = useDispatch();
  return (
    <Fragment>
      {" "}
      <div
        className="modal fade "
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className={`modal-content ${style_Them(them)}`}>
            <div
              className="modal-header"
              style={
                direction === "right"
                  ? {
                      display: "flex",
                      justifyContent: "end",
                    }
                  : null
              }
            >
              <h5 className="modal-title" id="exampleModalLongTitle">
                <FormattedMessage id="createcategory" />
              </h5>
            </div>
            <div className="modal-body">
              <input
                type="text"
                style={{ width: "100%" }}
                className={`form-control ${style_Them(them)}`}
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
                <FormattedMessage id="close" />
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
                <FormattedMessage id="createNC" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default InputCreateCategory;
