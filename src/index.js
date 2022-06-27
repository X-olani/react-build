import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
<<<<<<< HEAD
import { store, cheese, loadData } from "./store";
=======
import { store, cheese } from "./store";
>>>>>>> 24c8aa7240edc6616a990d557f6a185fdf9cf05e
import { Provider } from "react-redux";
import { Component } from "./component";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Component />
  </Provider>
);
<<<<<<< HEAD
store.dispatch(loadData())
=======
>>>>>>> 24c8aa7240edc6616a990d557f6a185fdf9cf05e

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
