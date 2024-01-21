import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import back from "../../assets/images/back.jpg";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import css from "../AuthorizationPage/AuthorizationPage.module.css";

const AuthorizationPage = () => {
  const [title, setTitle] = useState("Log In");
  const [dynamicMargin] = useState(100);
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
      />

      <div className={css.authContainer}>
        <NavLink
          className={css.auth}
          to="/main/authorization"
          onClick={() => setTitle("Sign In")}
        >
          Sign In
        </NavLink>

        <NavLink
          className={css.auth}
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
