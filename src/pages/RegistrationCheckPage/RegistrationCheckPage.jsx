import { NavLink } from "react-router-dom";

import css from "./RegistrationCheckPage.module.css";
import Button from "../../components/Button";

const RegistrationCheckPage = () => {
  return (
    <div>
      <div className={css.registrationCheck_container}>
        <svg width="72" height="72" className={css.icon}>
          <use></use>
        </svg>
        <p className={css.description}>
          Log in to your account using your phone or e-mail{" "}
        </p>

        <NavLink to="/main/authorization" className={css.btn}>
          <Button label="Login" type="button" />
        </NavLink>

        <p className={css.orText}>or</p>

        <NavLink to="/main/authorization/registration">
          Register a new account
        </NavLink>
      </div>
    </div>
  );
};

export default RegistrationCheckPage;
