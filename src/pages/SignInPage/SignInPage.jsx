import { NavLink } from "react-router-dom";
import css from "./SignInPage.module.css";

const SignInPage = () => {
  return (
    <div>
      <h1>SignInPageForm</h1>

      <ul>
        <li>
          <NavLink to="/welcome">
            <button type="button">Log In</button>
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
