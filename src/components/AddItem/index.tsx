import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { MdAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addItem, removeAll } from "../../redux/actions/actions";
import "./index.scss";

function AddItem() {
  const [item, setItem] = useState<string>("");
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="m-auto mt-5 w-50 d-grid addItem">
          <div className="input-group mb-3">
            <input
              type="text"
              name="item"
              className="form-control"
              value={item}
              required={true}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setItem(event.target.value)
              }
            />
            <button
              className="btn btn-dark shadow-lg"
              type="button"
              onClick={() => {
                item !== "" && dispatch(addItem(item));
                setItem("");
              }}
            >
              <MdAdd />
            </button>
          </div>
        </div>
        <button
          className="btn btn-outline-danger h-auto text-uppercase fs-5 fw-bold text-white"
          onClick={() => dispatch(removeAll())}
        >
          <ImCross />
        </button>
      </div>
    </React.Fragment>
  );
}

export default React.memo(AddItem);
