import React from "react";
import {Outlet } from "react-router-dom";

import { ScrollBar } from "../../components/ScrollBar/ScrollBar";

const AuthorizationPage = () => {
  return (
    <div className="container">
      <ScrollBar
        labelOne="Sign In"
        pathnameOne="/main/authorization/singIn"
        labelTwo="Registration"
        pathnameTwo="registration"
      />

      <Outlet />
    </div>
  );
};

export default AuthorizationPage;
