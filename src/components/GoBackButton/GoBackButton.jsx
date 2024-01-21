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
  dynamicMargin,
}) => {
  return (
    <div className={css.goBack}>
      <Link to={to}>
        <img src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} />
      </Link>
      <h3
        className={css.titleRecovery}
        style={{ marginLeft: dynamicMargin || 0 }}
      >
        {title}
      </h3>
    </div>
  );
};

export default GoBackButton;
