import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import css from "../AuthorizationPage/AuthorizationPage.module.css";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import back from "../../assets/images/back.jpg";

import { ScrollBar } from "../../components/ScrollBar/ScrollBar";

const AuthorizationPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className={css.top_container}>
        <GoBackButton
          to=""
          imgSrc={back}
          imgAlt="Go back"
          onClick={handleBack}
        />
        <h1 className={`${css.title} ${css.return}`}>Account login</h1>
      </div>
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
