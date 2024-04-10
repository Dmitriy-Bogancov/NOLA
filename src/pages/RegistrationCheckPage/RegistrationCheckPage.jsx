import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import css from "./RegistrationCheckPage.module.css";

const RegistrationCheckPage = ({ setRegistrationCheck }) => {
  const handleLoginCheck = () => {
    setRegistrationCheck((prev) => !prev);
  };
  return (
    <div className={css.backdrop}>
      <div className={css.registrationCheck_container}>
        <div className={css.item}>
          <svg width="72" height="72" className={css.icon}>
            <use></use>
          </svg>
          <p className={css.description}>
            Log in to your account using your e-mail{" "}
          </p>

          <NavLink
            to="authorization"
            className={css.btn}
            onClick={handleLoginCheck}
          >
            <button type="button">Login</button>
            {/* <Button label="Login" type="button" />  */}
          </NavLink>

          <p className={css.orText}>or</p>

          <NavLink
            to="/main/authorization/registration"
            onClick={handleLoginCheck}
          >
            Register a new account
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default RegistrationCheckPage;

RegistrationCheckPage.propTypes = {
  setRegistrationCheck: PropTypes.func,
};
