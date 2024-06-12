import React, { useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import Button from "../Button";
import css from "./RecoveryForm.module.css";
import * as yup from "yup";
import email from "../../assets/images/sendEmail.png";
import errorAttention from "../../assets/icons/circle-exclamation-mark.svg";
import GoBackButton from "../GoBackButton/GoBackButton";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ToastError } from "../../services/ToastError/ToastError";
import { ToastContainer } from "react-toastify";
import { postForgotPassword } from "../../services/https/https";
import { useCustomContext } from "../../services/Context/Context";

const schema = yup.object().shape({
  email: yup
    .string()
    .matches(/^[^\s]*$/, "Please enter valid characters")
    .matches(/^[^а-яА-ЯіІїЇєЄ]*$/, "Please enter valid characters")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i,
      "Mail is not registered in the system. Please try again."
    )
    .required("Email is required"),
});

const RecoveryForm = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useCustomContext();
  const [validForm, setValidForm] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    const validEmail = [".com", ".net", ".ua"];

    if (
      validEmail.find((el) => formData?.email?.includes(el)) &&
       errors?.email?.length === 0
    ) {
      setValidForm(true);
      return;
    } else {
      setValidForm(false);
    }
  }, [errors, errors?.email?.length, formData?.email]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    schema
      .validate(formData, { abortEarly: false })
      .then(async () => {
        try {
          console.log("Form submitted with data:", formData);
          // const data = await postForgotPassword(formData.email);
          handleToggleModal();
        } catch (error) {
          console.log(error);
          ToastError(error?.response?.data || error?.response?.statusText || error.message);
        }
        // setFormData({
        //   email: "",
        // });
        setErrors({});
        setValidForm(false);
      })
      .catch((validationErrors) => {
        const newErrors = {};
        validationErrors.inner.forEach((error) => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      });
  };

  const handleBlur = async (field) => {
    try {
      await schema.validateAt(field, formData);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: "",
      }));
    } catch (validationError) {
      if (!validationError.message) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [field]: "Invalid value",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [field]: validationError.message,
        }));
      }
    }
  };

  const handleToggleModal = () => {
    setIsModal((prev) => !prev);
  };

  const handleBack = () => {
    navigate("/main/authorization");
  };

  const getBorderColor = (field) => {
    return errors[field] && "#ff0000";
  };

  return (
    <>
      <ToastContainer />
      <div className={css.container}>
        <GoBackButton
          imgAlt="Go back"
          imgWidth="50px"
          imgHeight="50px"
          title="Password recovery"
          to="/main/authorization"
          onClick={handleBack}
        />

        <img src={email} alt="Logo" className={css.imageForm} />
        <h3 className={`${css.titleForm} dark:text-white`}>Update your password</h3>
        <p className={`${css.infoForm} dark:text-white`}>
          Enter your username or email address and <br />
          select “Send Email”
        </p>

        <form className={css.formContainer} onSubmit={handleSubmit}>
          <div className={css.inputContainer}>
            {errors.email && (
              <div className={css.errorText}>{errors.email}</div>
            )}
            <input
              className={`${css.inputForm} ${
                errors?.email?.length === 0 && theme === "light" ? css.active : ""
              }
              secondary_text_style
              dark:bg-black dark:border-white dark:text-white
              `}
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={() => handleBlur("email")}
              style={{
                borderColor: getBorderColor("email"),
                color: getBorderColor("email"),
              }}
            />
            {errors?.email?.length > 1 ? (
              <img src={errorAttention} alt="" className={css.img_error} />
            ) : (
              ""
            )}
          </div>
          <div className={css.btn_container}>
            {" "}
            <Button
              label="Send email"
              type="submit"
              disabled={validForm ? false : true}
            />
          </div>
        </form>

        {isModal && (
          <Modal
            handleToggleModal={handleToggleModal}
          >
            <p className={css.modal_title}>New password sent by email </p>

          </Modal>
        )}
      </div>
    </>
  );
};

export default RecoveryForm;
