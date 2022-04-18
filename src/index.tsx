import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { App } from "components";
import { WelcomePage } from "components";

ReactDOM.render(
  <React.StrictMode>
    <WelcomePage />
  </React.StrictMode>,
  document.getElementById("root")
);
