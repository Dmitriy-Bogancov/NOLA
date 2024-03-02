import { useNavigate } from "react-router";
import css from "./Modal.module.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export const Modal = ({
  children,
  handleToggleModal,
  navigatePage,
  feedback = false,
}) => {
  const navigate = useNavigate();

  const handleCloseBackdrop = (e) => {
    const { target, currentTarget } = e;
    if (target === currentTarget) {
      handleToggleModal();
    }
  };

  useEffect(() => {
    const handleSetTimeoutModal = (() => {
      if (!feedback) {
        setTimeout(() => {
          navigate(`${navigatePage}`, { replace: true });
        }, 1500);
        return;
      }
    })();
  }, [feedback, navigate, navigatePage]);

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
  navigatePage: PropTypes.string,
  feedback: PropTypes.bool,
};
