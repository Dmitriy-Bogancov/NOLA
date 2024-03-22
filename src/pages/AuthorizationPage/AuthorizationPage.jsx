import React from "react";
import { Outlet } from "react-router-dom";
// import css from "../AuthorizationPage/AuthorizationPage.module.css";

import { ScrollBar } from "../../components/ScrollBar/ScrollBar";

const AuthorizationPage = () => {
  return (
    <div>
      <ScrollBar
        labelOne="Sign In"
        pathnameOne="/main/authorization"
        labelTwo="Registration"
        pathnameTwo="/main/authorization/registration"
      />

      <Outlet />
    </div>
  );
};

export default AuthorizationPage;
