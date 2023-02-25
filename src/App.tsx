import React from "react";
import { useSelector } from "react-redux";
import "./App.scss";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";

function App() {
  const list = useSelector((state: any) => state.itemReducer.list);
  return (
    <React.Fragment>
      <div className="App">
        <div className="container-fluid shadow-lg bg-dark mb-5">
          <h3 className="display-2 text-center text-uppercase">What To Do</h3>
        </div>
        <div className="container d-flex flex-column gap-5">
          <div className="row">
            <div className="col">
              <AddItem />
            </div>
          </div>
          {list && list.length > 0 ? (
            <div className="row">
              <div className="col">
                <ItemList list={list} />
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col">
                <h3 className="display-3 text-center text-uppercase">
                  No Items To Display
                </h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
