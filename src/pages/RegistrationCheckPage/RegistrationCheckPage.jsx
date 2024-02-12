import { NavLink, useNavigate } from "react-router-dom";

import css from "./RegistrationCheckPage.module.css";
import Button from "../../components/Button";

const RegistrationCheckPage = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/main/authorization", { replace: true });
  };
  return (
    <div>
      <div className={css.registrationCheck_container}>
        <svg width="72" height="72" className={css.icon}>
          <use></use>
        </svg>
        <p className={css.description}>
          Log in to your account using your phone or e-mail{" "}
        </p>

        <div className={css.btn} onClick={handleLoginClick}>
          <Button label="Login" type="button" />
        </div>

        <p className={css.orText}>or</p>

        <NavLink to="/main/authorization/registration">
          Register a new account
        </NavLink>
      </div>
    </div>
  );
};

export default RegistrationCheckPage;
