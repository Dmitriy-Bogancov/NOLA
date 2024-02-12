import { NavLink } from "react-router-dom";

// import css from "./RecoverPasswordPage.module.css";

const RecoverPasswordPage = () => {
  return (
    <div>
      <form>
        <input type="text" name="codeField" placeholder="Code Field" />
        <input type="text" name="passwordField" placeholder="Password Field" />

        <button type="button">Confirm</button>
      </form>
      <button type="button">Send a Code Again</button>
      <ul>
        <li>
          <NavLink to="/main/authorization">
            <button type="button">Cancel</button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/main/authorization">
            <button type="button">OK</button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default RecoverPasswordPage;
