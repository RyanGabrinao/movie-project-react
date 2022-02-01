import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ScrollToTop from "./hooks/ScrollToTop";
import { BrowserRouter } from "react-router-dom";
import { APP_FOLDER_NAME } from "./globals/globals";
import "normalize.css";
import "./styles/App.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={APP_FOLDER_NAME}>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
