import PropTypes from "prop-types";
import css from "./CutString.module.css";
import { useCustomContext } from "../../services/Context/Context";

export const CutString = ({ string, maxLength }) => {
  const { theme, setTheme } = useCustomContext();

  const res =
    string.length > maxLength ? string.slice(0, maxLength) + "..." : string;

  return (
    <p className={theme === "dark" ? css.cutStringDark : css.cutString}>
      {res}
    </p>
  );
};

CutString.propTypes = {
  string: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
};
