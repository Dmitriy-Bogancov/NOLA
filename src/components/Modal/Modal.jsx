import css from "./Modal.module.css";

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
