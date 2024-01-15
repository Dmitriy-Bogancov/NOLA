import { NavLink } from "react-router-dom";
// import css from "./RecoveryPage.module.css";

const RecoveryPage = () => {
  return (
    <div>
      <h1>RecoveryPage</h1>

      <ul>
        <li>
          <NavLink to="/updatePassword">
            <button type="button">Confirm</button>
          </NavLink>
        </li>
        <li>
          <NavLink>
            <button type="button">Send a Code Again</button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/main/authorization">
            <button type="button">Cancel</button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default RecoveryPage;
