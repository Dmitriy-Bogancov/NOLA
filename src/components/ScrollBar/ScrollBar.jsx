import { NavLink, useLocation } from "react-router-dom";
import css from "./ScrollBar.module.css";
import PropTypes from "prop-types";
import { ReactComponent as Icon_Lock } from "../../assets/icons/lock.svg";

import { useCustomContext } from "../../services/Context/Context";

export const ScrollBar = ({ labelOne, pathnameOne, labelTwo, pathnameTwo }) => {
  const location = useLocation();
  const { theme, setTheme } = useCustomContext();
  return (
    <div className={css.authContainer}>
      {theme === "dark" ? (
        <>
          <NavLink
            className={`
         ${css.authDark} ${
              location.pathname === pathnameOne ? css.activeDark : ""
            }`}
            to={pathnameOne}
          >
            {labelOne}
          </NavLink>

          <NavLink
            className={` ${css.authDark} ${
              location.pathname === pathnameTwo ? css.activeDark : ""
            }
             `}
            to={pathnameTwo}
          >
            {labelTwo}

            {labelTwo === "Archived" && (
              <div className={css.iconDark}>
                <Icon_Lock />
              </div>
            )}
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            className={`
              ${css.auth} ${
              location.pathname === pathnameOne ? css.active : ""
            }`}
            to={pathnameOne}
          >
            {labelOne}
          </NavLink>

          <NavLink
            className={`
             ${css.auth} ${
              location.pathname === pathnameTwo ? css.active : ""
            }`}
            to={pathnameTwo}
          >
            {labelTwo}
            {labelTwo === "Archived" && (
              <div key={labelTwo} className={css.icon}>
                <Icon_Lock />
              </div>
            )}
          </NavLink>
        </>
      )}
    </div>
  );
};
ScrollBar.propTypes = {
  labelOne: PropTypes.string.isRequired,
  pathnameOne: PropTypes.string.isRequired,
  labelTwo: PropTypes.string.isRequired,
  pathnameTwo: PropTypes.string.isRequired,
};
