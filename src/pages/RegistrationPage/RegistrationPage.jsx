import { NavLink } from "react-router-dom";
import css from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <div>
      <h1>RegistrationForm</h1>

      <NavLink to="/welcome">
        <button type="button">Register</button>
      </NavLink>
    </div>
  );
};

export default RegistrationPage;
