import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import back from "../../assets/images/back.jpg";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import css from "../AuthorizationPage/AuthorizationPage.module.css";

const AuthorizationPage = () => {
  const [title, setTitle] = useState("Log In");
  const [dynamicMargin] = useState(100);

  const location = useLocation();

  const handleGoBack = () => {
    setTitle("Log In");
  };

  return (
    <div className="container">
      <GoBackButton
        to="/main/authorization"
        imgSrc={back}
        imgAlt="Go back"
        imgWidth="50px"
        imgHeight="50px"
        title={title}
        setTitle={setTitle}
        dynamicMargin={dynamicMargin}
        onClick={handleGoBack}
      />

      <div className={css.authContainer}>
        <NavLink
          className={`${css.auth} ${
            location.pathname === "/main/authorization/singIn" ? css.active : ""
          }`}
          to="/main/authorization/singIn"
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

      <Outlet />
    </div>
  );
};

export default AuthorizationPage;
