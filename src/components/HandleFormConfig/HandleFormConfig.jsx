import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Toastify } from "../../services/Toastify/Toastify";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

export const HandleFormConfig = ({ message, navigatePage }) => {
  const navigate = useNavigate();

  useEffect(() => {
    Toastify(`${message}`);
    setTimeout(() => {
      navigate(navigatePage, { replace: true })
    },  3000);
  }, [message, navigate, navigatePage]);

  return <ToastContainer />;
};

HandleFormConfig.propTypes = {
  message: PropTypes.string,
  navigatePage: PropTypes.string,
};
