import { NavLink } from "react-router-dom";
import css from "./RecoverPasswordPage.module.css";

const RecoverPasswordPage = () => {
  return (
    <div>
      <h1>RecoverPasswordPage</h1>

      <ul>
        <li>
          <NavLink to="/signIn">
            <button type="button">Cancel</button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/recovery">
            <button type="button">Reset the Password</button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default RecoverPasswordPage;
