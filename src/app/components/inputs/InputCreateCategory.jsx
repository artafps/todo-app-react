import React, { Fragment } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  change_text_category,
  new_category,
} from "../../../redux/actions/counter";

const InputCreateCategory = () => {
  const taxtcategory = useSelector((state) => state.txtcategory);
  const dispatch = useDispatch();
  return (
    <Fragment>
      {" "}
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
                onChange={(e) => dispatch(change_text_category(e.target.value))}
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
    </Fragment>
  );
};

export default InputCreateCategory;
