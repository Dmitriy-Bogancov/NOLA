import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import css from "./RegistrationForm.module.css";
import Button from "../Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import * as yup from "yup";

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
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .min(6, "Confirm Password must be at least 6 characters")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {}, [errors]);

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

  const handleTogglePassword = (field) => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else if (field === "confirmPassword") {
      setShowConfirmPassword(!showConfirmPassword);
    }
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
      .then(() => {
        console.log("Form submitted with data:", formData);
        setFormData({
          email: "",
          password: "",
          confirmPassword: "",
        });
        setErrors({});
        navigate("/main/accountAdverticer");
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
    <form onSubmit={handleSubmit}>
      <div className={css.inputContainer}>
        {errors.email && <div className={css.errorText}>{errors.email}</div>}
        <input
          className={css.inputForm}
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleInputChange}
          onBlur={() => handleBlur("email")}
          style={{ borderColor: getBorderColor("email") }}
        />
      </div>

      <div className={css.inputContainer}>
        {errors.password && (
          <div className={css.errorText}>{errors.password}</div>
        )}
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

          <div
            className={css.eyeIcon}
            onClick={() => handleTogglePassword("password")}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
      </div>

      <div className={css.inputContainer}>
        {errors.confirmPassword && (
          <div className={css.errorText}>{errors.confirmPassword}</div>
        )}
        <div className={css.passwordInputContainer}>
          <input
            className={`${css.inputForm} ${css.passwordInput}`}
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            onBlur={() => handleBlur("confirmPassword")}
            style={{ borderColor: getBorderColor("confirmPassword") }}
          />

          <div
            className={css.eyeIcon}
            onClick={() => handleTogglePassword("confirmPassword")}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
      </div>

      <p className={css.textInfo}>
        *By clicking the Register button, I agree to the
        <span className={css.spanPolicy}>Privacy Policy</span> and give my
        consent to data processing
      </p>
      <Button label="Register" type="submit" />
    </form>
  );
};

export default RegistrationForm;
