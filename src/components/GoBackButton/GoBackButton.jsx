/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import css from "./GoBackButton.module.css";
import PropTypes from "prop-types";

const GoBackButton = ({
  to,
  title,
  imgSrc,
  imgAlt,
  imgWidth,
  imgHeight,
  onClick,
}) => {
  return (
    <div className={css.goBack}>
      <Link to={to} onClick={onClick}>
        <img src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} />
      </Link>
      <h3 className={css.titleRecovery}>{title}</h3>
    </div>
  );
};
GoBackButton.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  imgWidth: PropTypes.string,
  imgHeight: PropTypes.string,
  onClick: PropTypes.func,
};

export default GoBackButton;
