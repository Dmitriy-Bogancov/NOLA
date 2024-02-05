import React from "react";
import { Link } from "react-router-dom";
import css from "./GoBackButton.module.css";

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

export default GoBackButton;
