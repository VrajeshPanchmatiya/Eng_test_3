import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { pageStore } from "./redux/pageStore";
import Paginaton from "./components/Paginaton";
import PaginatonDetail from "./components/PaginatonDetail";
const store = createStore(pageStore, applyMiddleware(thunk));
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Paginaton />} />
          <Route path="/details" element={<PaginatonDetail />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
