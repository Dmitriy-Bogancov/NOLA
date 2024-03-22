import { NavLink, useLocation } from "react-router-dom";
import css from "./ScrollBar.module.css";
import PropTypes from "prop-types";

export const ScrollBar = ({ labelOne, pathnameOne, labelTwo, pathnameTwo }) => {
  const location = useLocation();

  return (
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
  );
};
ScrollBar.propTypes = {
  labelOne: PropTypes.string.isRequired,
  pathnameOne: PropTypes.string.isRequired,
  labelTwo: PropTypes.string.isRequired,
  pathnameTwo: PropTypes.string.isRequired,
};
