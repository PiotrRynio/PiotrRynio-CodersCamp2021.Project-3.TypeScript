import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { App } from "./components/pages/App/App";
import { UserContextProvider } from "./providers/AppProviders";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
