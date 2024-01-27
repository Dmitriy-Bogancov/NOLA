import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Context } from "./services/Context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <Context>
        <BrowserRouter basename="/NOLA">
          <App />
        </BrowserRouter>
      </Context>
    </div>
  </React.StrictMode>
);
