import { PersistGate } from "redux-persist/integration/react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Context } from "./services/Context/Context";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Context>
      <div className="container bg-white dark:bg-black dark:text-white">
        <BrowserRouter basename="/NOLA">
          <PersistGate loading={null} persistor={persistor}>
          <GoogleOAuthProvider clientId="816846792743-3cmg8t2bhfvr19bvu60r65slnrjon8ko.apps.googleusercontent.com">
            <App />
            </GoogleOAuthProvider>
          </PersistGate>
        </BrowserRouter>
      </div>
    </Context>
  </Provider>
  // </React.StrictMode>
);
