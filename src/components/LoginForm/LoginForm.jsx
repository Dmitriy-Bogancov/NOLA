import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import css from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import { ToastError } from "../../services/ToastError/ToastError";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/authThunk";
import { Toastify } from "../../services/Toastify/Toastify";
import error from "../../assets/icons/circle-exclamation-mark.svg";

const schema = yup.object().shape({
  email: yup
    .string()
    .matches(/^[^\s]*$/, "Please enter valid characters")
    .matches(/^[^а-яА-ЯіІїЇєЄ]*$/, "Please enter valid characters")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [validForm, setValidForm] = useState(false);

  useEffect(() => {
    const validEmail = [".com", ".net", ".ua"];

    if (
      validEmail.find((el) => formData?.email?.includes(el)) &&
      formData?.password?.length > 7 &&
      errors?.email?.length === 0 &&
      errors?.password?.length === 0
    ) {
      setValidForm(true);
      return;
    } else {
      setValidForm(false);
    }
  }, [
    errors?.email?.length,
    errors?.password?.length,
    formData?.email,
    formData?.email?.length,
    formData?.password?.length,
    errors,
  ]);

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

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleBlur = async (field) => {
    try {
      await schema.validateAt(field, formData);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: "",
      }));
    } catch (validationError) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: validationError.message,
      }));
      setValidForm(false);
    }
  };

  const getBorderColor = (field) => {
    return errors[field] && "#DA2E2E";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    schema
      .validate(formData, { abortEarly: false })
      .then(async () => {
        console.log("Form submitted with data:", formData);
        try {
          await dispatch(loginThunk(formData)).unwrap();
          Toastify("SignIn sucsessfull");
          navigate("/main/accountAdverticer");
        } catch (error) {
          ToastError(error);
        }
      })

      .catch((validationErrors) => {
        const errorsMap = {};
        validationErrors.inner.forEach((error) => {
          errorsMap[error.path] = error.message;
        });
        setErrors(errorsMap);
      });
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className={css.inputContainer}>
          <div className={css.errorText}>{errors.email}</div>
          <input
            className={`${css.inputForm}  ${
              errors?.email?.length === 0 ? css.active : ""
            }
             ${errors?.email?.length > 0 ? css.errorPlaceholder : ""}
             dark:bg-black dark:border-white dark:text-white`}
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
            <img src={error} alt="" className={css.img_error} />
          ) : (
            ""
          )}
        </div>

        <div className={css.inputContainer}>
          <div className={css.errorText}>{errors.password}</div>
          <div className={css.passwordInputContainer}>
            <input
              className={`${css.inputForm} ${css.passwordInput}  ${
                errors?.password?.length === 0 ? css.active : ""
              }
              ${errors?.password?.length > 0 ? css.errorPlaceholder : ""}
               dark:bg-black dark:border-white dark:text-white`}
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              onBlur={() => handleBlur("password")}
              style={{
                borderColor: getBorderColor("password"),
                color: getBorderColor("password"),
              }}
            />
            <div
              className={`${css.eyeIcon} ${
                errors?.password?.length > 1 ? css.error : ""
              }`}
              onClick={handleTogglePassword}
            >
              {!showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
        </div>

        <div>
          <Link to="/recovery" className={css.link_forgot}>
            <p className={css.textForgot}>Forgot password?</p>
          </Link>
        </div>
        <div className={`${css.btn_text} ${validForm ? css.btn_valid : ""}`}>
          <Button
            label="Sign In"
            type="submit"
            disabled={validForm ? false : true}
          />
        </div>
      </form>
    </>
  );
};

export default LoginForm;
