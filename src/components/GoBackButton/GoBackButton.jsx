/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import css from "./GoBackButton.module.css";
import PropTypes from "prop-types";
import { useCustomContext } from "../../services/Context/Context";
import { ReactComponent as Icon_Back } from "../../assets/icons/arrow_left.svg";

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
      <Link
        to={to}
        onClick={onClick}
        className={theme === "dark" ? css.iconDark : ""}
      >
        <Icon_Back />
      </Link>
      <h3 className={`${css.titleRecovery} dark:text-white`}>{title}</h3>
    </div>
  );
};
GoBackButton.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  imgWidth: PropTypes.string,
  imgHeight: PropTypes.string,
  onClick: PropTypes.func,
};

export default GoBackButton;
