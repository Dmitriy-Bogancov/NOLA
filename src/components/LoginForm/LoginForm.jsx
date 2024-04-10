import React, { useState } from "react";
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
    .min(6, "Password must be at least 6 characters"),
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
    }
  };

  const getBorderColor = (field) => {
    return errors[field] ? "#ff0000" : "#9e9e9e";
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

        setFormData({
          email: "",
          password: "",
        });
        // setErrors({});
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
            className={css.inputForm}
            type="email"
            name="email"
            placeholder="Username or Email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={() => handleBlur("email")}
            style={{ borderColor: getBorderColor("email") }}
          />
        </div>

        <div className={css.inputContainer}>
          <div className={css.errorText}>{errors.password}</div>
          <div className={css.passwordInputContainer}>
            <input
              className={`${css.inputForm} ${css.passwordInput}`}
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              onBlur={() => handleBlur("password")}
              style={{ borderColor: getBorderColor("password") }}
            />
            <div className={css.eyeIcon} onClick={handleTogglePassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
        </div>

        <div>
          <Link to="/recovery">
            <p className={css.textForgot}>Forgot password?</p>
          </Link>
        </div>
        <Button label="Sign In" type="submit" />
      </form>
    </>
  );
};

export default LoginForm;
