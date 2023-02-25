import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../redux/actions/actions";
import "./index.scss";

interface ListItemProps {
  list: string[];
}

function ItemList(props: ListItemProps) {
  const dispatch = useDispatch();

  return (
    <div className="container p-5">
      <div className="row row-cols-2 row-cols-md-4 row-gap-sm-2 gap-5 g-5 justify-content-center align-items-center">
        {props.list.map((item: any) => {
          const { id, data } = item;
          return (
            <div key={id} className="col bg-info text-dark rounded-2">
              <div className="card">
                <div className="card-body d-flex flex-column justify-content-center">
                  <div className="card-text">
                    <p className="fs-4 text-center fw-bold">{data}</p>
                  </div>
                  <button
                    className="btn btn-warning h-25 my-auto"
                    onClick={() => dispatch(deleteItem(id))}
                  >
                    <AiTwotoneDelete />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default React.memo(ItemList);
