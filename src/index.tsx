import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { Login } from "./components/pages/Login/Login";
import { App } from "./components/pages/App/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/*<Login />*/}
  </React.StrictMode>,
  document.getElementById("root")
);
