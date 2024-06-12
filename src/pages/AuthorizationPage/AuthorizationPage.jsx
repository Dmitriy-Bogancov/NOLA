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
      <GoBackButton
          to=""
          imgAlt="Go back"
          imgWidth="50px"
          imgHeight="50px"
          title="Account login"
          onClick={handleBack}
        />
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
