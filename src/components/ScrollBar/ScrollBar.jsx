import { NavLink, useLocation } from "react-router-dom";
import css from "./ScrollBar.module.css";

export const ScrollBar = ({ labelOne, pathnameOne, labelTwo, pathnameTwo }) => {
  const location = useLocation();

  return (
    <div className="container">
      <div className={css.authContainer}>
        <NavLink
          className={`${css.auth} ${
            location.pathname === pathnameOne ? css.active : ""
          }`}
          to={pathnameOne}
        >
          {labelOne}
        </NavLink>

        <NavLink
          className={`${css.auth} ${
            location.pathname === pathnameTwo ? css.active : ""
          }`}
          to={pathnameTwo}
        >
          {labelTwo}
        </NavLink>
      </div>
    </div>
  );
};
