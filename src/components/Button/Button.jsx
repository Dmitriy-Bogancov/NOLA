import React from "react";
import PropTypes from "prop-types";
import css from "./Button.module.css";

const Button = ({ label, onClick, disabled }) => {
  return (
    <button className={`${css.buttonForm} ${disabled ? css.disabled : ""}`} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
