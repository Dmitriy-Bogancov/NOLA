import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import css from "../AuthorizationPage/AuthorizationPage.module.css";

import { ScrollBar } from "../../components/ScrollBar/ScrollBar";

const AuthorizationPage = () => {
  const [setTitle] = useState("Log In");

  const location = useLocation();

  return (
    <div className="container">
      <div className={css.authContainer}>
        <NavLink
          className={`${css.auth} ${
            location.pathname === "/main/authorization" ? css.active : ""
          }`}
          to="/main/authorization"
          onClick={() => setTitle("Sign In")}
        >
          Sign In
        </NavLink>

        <NavLink
          className={`${css.auth} ${
            location.pathname === "/main/authorization/registration"
              ? css.active
              : ""
          }`}
          to="registration"
          onClick={() => setTitle("Registration")}
        >
          Registration
        </NavLink>
      </div>
    </div>
  );
};

export default AuthorizationPage;
