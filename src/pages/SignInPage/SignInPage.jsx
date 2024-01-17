import { NavLink } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
// import css from "./SignInPage.module.css";
// import { useState } from "react";

const SignInPage = () => {
  return (
    <div>
      <h1>SignInPageForm</h1>

      <ul>
        <li>
          <NavLink to="/welcome">
            <LoginForm />
          </NavLink>
        </li>
        <li>
          <NavLink to="">
            <button type="button">Google Quick Log In</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/recoverPasswordPage">
            <button type="button">Recover Password</button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SignInPage;
