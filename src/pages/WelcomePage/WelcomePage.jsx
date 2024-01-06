import { NavLink } from "react-router-dom";

import css from "./WelcomePage.module.css";

const WelcomePage = () => {
  return (
    <div>
      <div className={css.container_welcome}>
        <h1>Welcome to NOLA!</h1>

        <NavLink to="/main">
          <button type="button">continue</button>
        </NavLink>
      </div>
    </div>
  );
};

export default WelcomePage;
