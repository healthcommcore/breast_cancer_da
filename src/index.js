import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import "react-app-polyfill/ie11";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

ReactGA.initialize("UA-140432869-1");

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById("root"));
registerServiceWorker();
