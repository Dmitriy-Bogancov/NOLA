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
      <div className={css.modal}>
        <svg className={css.svg} onClick={handleToggleModal}>
          <use></use>
        </svg>

        <div>{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
};
