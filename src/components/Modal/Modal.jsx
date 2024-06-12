import css from "./Modal.module.css";
import PropTypes from "prop-types";

export const Modal = ({ children, handleToggleModal }) => {
  const handleCloseBackdrop = (e) => {
    const { target, currentTarget } = e;
    if (target === currentTarget) {
      handleToggleModal();
    }
  };

  return (
    <div className={css.backdrop} onClick={handleCloseBackdrop}>
      <div className={`${css.modal} dark:bg-black`}>
        <div className={css.children}>{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
};
