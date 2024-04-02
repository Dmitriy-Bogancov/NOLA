import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Context } from "./services/Context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Context>
      <div className="container bg-white dark:bg-black dark:text-white">
        <BrowserRouter basename="/NOLA">
          <App />
        </BrowserRouter>
      </div>
    </Context>
  // </React.StrictMode>
);
