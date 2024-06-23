import css from "./Modal.module.css";
import PropTypes from "prop-types";

export const Modal = ({ confirm, cancel, title,
  description, handleToggleModal, btn_text_confirm = "Confirm", btn_text_cancel = "Cancel" }) => {
  const handleCloseBackdrop = (e) => {
    const { target, currentTarget } = e;
    if (target === currentTarget) {
      handleToggleModal();
    }
  };

  return (
    <div className={css.backdrop} onClick={handleCloseBackdrop}>
      <div className={`${css.modal} dark:bg-black`}>
        <div className={css.children}>
          {/* {children}  */}
     <h2 className={css.modal_title}>{title}</h2>
          <p className={css.modal_descr}>{description}</p>

          <button type="button"  className={css.modal_btn} onClick={confirm}>
          {btn_text_confirm}
          </button>
          <p type="button"  className={`${css.modal_text} dark:text-white`} onClick={cancel}>
           {btn_text_cancel}
          </p>

  

        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  // children: PropTypes.node.isRequired,
  handleToggleModal: PropTypes.func.isRequired,
  confirm: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  btn_text_confirm: PropTypes.string,
  btn_text_cancel: PropTypes.string,
};
