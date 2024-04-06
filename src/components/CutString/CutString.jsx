import PropTypes from "prop-types";
import css from "./CutString.module.css";

export const CutString = ({ string, maxLength }) => {
  const res =
    string.length > maxLength ? string.slice(0, maxLength) + "..." : string;

  return <p className={css.cutString}>{res}</p>
};

CutString.propTypes = {
  string: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
};
