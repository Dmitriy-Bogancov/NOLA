import { NavLink, Outlet } from "react-router-dom";
// import css from "./AuthorizationPage.module.css";

const AuthorizationPage = () => {
  return (
    <div>
      <NavLink to="/main/authorization/">
        <button type="button">Sign In</button>
      </NavLink>

      <NavLink to="registration">
        <button type="button">Registration</button>
      </NavLink>

      <Outlet />
    </div>
  );
};

export default AuthorizationPage;
