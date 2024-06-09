/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import css from "./GoBackButton.module.css";
import PropTypes from "prop-types";
import { useCustomContext } from "../../services/Context/Context";

const GoBackButton = ({
  to,
  title,
  imgSrc,
  imgAlt,
  imgWidth,
  imgHeight,
  onClick,
}) => {
  const { theme, setTheme } = useCustomContext();
  return (
    <div className={css.goBack}>
      <Link to={to} onClick={onClick}>
        <svg
          width={imgWidth}
          height={imgHeight}
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.3333 28H39.6666"
            stroke={theme === "dark" ? "white" : "black"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25.6666 18.6667L16.3333 28.0001L25.6666 37.3334"
            stroke={theme === "dark" ? "white" : "black"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <h3 className={`${css.titleRecovery} dark:text-white`}>{title}</h3>
    </div>
  );
};
GoBackButton.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string.isRequired,
  imgWidth: PropTypes.string,
  imgHeight: PropTypes.string,
  onClick: PropTypes.func,
};

export default GoBackButton;
