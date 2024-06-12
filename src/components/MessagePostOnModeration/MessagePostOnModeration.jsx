import css from "./MessagePostOnModeration.module.css";
import checked from "../../assets/icons/checked.svg";
import PropTypes from "prop-types";

export const MessagePostOnModeration = ({ children }) => {
  return (
    <div className={css.checked_container}>
      <img src={checked} alt="checked" />
      <p className={`${css.description} dark:text-white `}>{children}</p>
    </div>
  );
};

MessagePostOnModeration.propTypes = {
  children: PropTypes.node.isRequired,
};
