import { PersistGate } from "redux-persist/integration/react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Context } from "./services/Context/Context";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Context>
      <div className="container bg-white dark:bg-black dark:text-white">
        <BrowserRouter basename="/NOLA">
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </BrowserRouter>
      </div>
    </Context>
  </Provider>
  // </React.StrictMode>
);
