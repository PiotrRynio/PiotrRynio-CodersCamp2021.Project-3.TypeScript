import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { App } from "./components/pages/App/App";
import {
  UserContextProvider,
  ChosenChatContextProvider,
} from "./providers/AppProviders";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <ChosenChatContextProvider>
        <App />
      </ChosenChatContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
