import React, { useState } from "react";
import Button from "../Button";
import css from "./RecoveryForm.module.css";
import * as yup from "yup";
import email from "../../assets/images/sendEmail.png";
import errorAttention from "../../assets/icons/circle-exclamation-mark.svg";
import GoBackButton from "../GoBackButton/GoBackButton";
import { useNavigate } from "react-router-dom";
import { ToastError } from "../../services/ToastError/ToastError";
import { postForgotPassword } from "../../services/https/https";
import { useCustomContext } from "../../services/Context/Context";
import { MessagePostOnModeration } from "../MessagePostOnModeration/MessagePostOnModeration";

const schema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@(gmail\.com|ukr\.net|meta\.ua)$/,
      "Please enter valid characters"
    )
    .matches(/^[^\s]*$/, "Please enter valid characters")
    .matches(/^[^а-яА-ЯіІїЇєЄ]*$/, "Please enter valid characters")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i,
      "Mail is not registered in the system. Please try again."
    )
    .required("Email is required"),
});

const RecoveryForm = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useCustomContext();

  const [formData, setFormData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [messageChangePassword, setMessageChangePassword] = useState(false);

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
          setMessageChangePassword(true);

          setTimeout(() => {
            navigate("/main/authorization");
          }, 3000);
          // Toastify("New password sent by email");
        } catch (error) {
          console.log(error);
          ToastError(
            error?.response?.data ||
              error?.response?.statusText ||
              error.message
          );
        }
        // setFormData({
        //   email: "",
        // });
        setErrors({});
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

  const handleBack = () => {
    navigate("/main/authorization");
  };

  const getBorderColor = (field) => {
    return errors[field] && "rgba(218, 46, 46, 1)";
  };

  return (
    <>
      {!messageChangePassword && (
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
          <h3 className={`${css.titleForm} dark:text-white`}>
            Update your password
          </h3>
          <p className={`${css.infoForm} dark:text-white`}>
            Enter your email address and click
            <br />
            “Send Password”
          </p>

          <form className={css.formContainer} onSubmit={handleSubmit}>
            <div className={css.inputContainer}>
              {errors.email && (
                <div className={css.errorText}>{errors.email}</div>
              )}
              <input
                className={`${css.inputForm} ${
                  errors?.email?.length === 0 && theme === "light"
                    ? css.active
                    : ""
                } ${errors?.email?.length > 0 ? css.errorPlaceholder : ""}
              secondary_text_style
              dark:bg-black dark:border-white dark:text-white
              `}
                type="email"
                name="email"
                placeholder="email"
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
              <Button
                label="Send Password"
                type="submit"
                disabled={
                  formData?.email?.includes("gmail.com") ||
                  formData?.email?.includes("ukr.net") ||
                  formData?.email?.includes("meta.ua")
                    ? false
                    : true
                }
              />
            </div>
          </form>
        </div>
      )}

      {messageChangePassword && (
        <MessagePostOnModeration>
          New password has been sent to your email
        </MessagePostOnModeration>
      )}
    </>
  );
};

export default RecoveryForm;
