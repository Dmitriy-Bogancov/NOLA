import { NavLink } from "react-router-dom";
import css from "./AuthorizationPage.module.css";

const AuthorizationPage = () => {
  return (
    <div>
      <h1>AuthorizationPage</h1>
      <NavLink to="/registration">
        <button type="button">Registration</button>
      </NavLink>

      <NavLink to="/signIn">
        <button type="button">Sign In</button>
      </NavLink>
    </div>
  );
};

export default AuthorizationPage;
