import { NavLink } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import RegistrationForm from "../../components/RegistrationForm";

import css from "./WelcomePage.module.css";

const WelcomePage = () => {
  return (
    <div>
      <div className={css.container_welcome}>
        <h1>Welcome to NOLA!</h1>
        <LoginForm />
        <RegistrationForm />

        <NavLink to="/main">
          <button type="button">continue</button>
        </NavLink>
      </div>
    </div>
  );
};

export default WelcomePage;
