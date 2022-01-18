import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "normalize.css";
import "./styles/App.scss";
import { BrowserRouter } from "react-router-dom";
import { APP_FOLDER_NAME } from "./globals/globals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={APP_FOLDER_NAME}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
