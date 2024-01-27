import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

import css from "./ScrollBar.module.css";
import GoBackButton from "../GoBackButton/GoBackButton";
import back from "../../assets/images/back.jpg";

export const ScrollBar = ({ labelOne, pathnameOne, labelTwo, pathnameTwo }) => {
  const location = useLocation();
  const [title, setTitle] = useState("Log In");
  const [dynamicMargin] = useState(100);

  const handleGoBack = () => {
    setTitle("Log In");
  };

  return (
    <div className="container">
      {/* {pathnameOne === "/main/authorization/singIn" ||
      pathnameTwo === "/main/authorization/registration" ? (
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
      ) : (
        ""
      )} */}

      <div className={css.authContainer}>
        <NavLink
          className={`${css.auth} ${
            location.pathname === pathnameOne ? css.active : ""
          }`}
          to={pathnameOne}
          onClick={() => setTitle("Sign In")}
        >
          {labelOne}
        </NavLink>

        <NavLink
          className={`${css.auth} ${
            location.pathname === pathnameTwo ? css.active : ""
          }`}
          to={pathnameTwo}
          onClick={() => setTitle("Registration")}
        >
          {labelTwo}
        </NavLink>
      </div>
    </div>
  );
};
