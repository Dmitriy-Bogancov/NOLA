import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import css from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useCustomContext } from "../../services/Context/Context";

const schema = yup.object().shape({
  email: yup
    .string()
    .matches(/^[^\s]*$/)
    .matches(/^[^а-яА-ЯіІїЇєЄ]*$/)
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    .required(),
  password: yup.string().required().min(6),
});

const LoginForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    schema
      .validate(formData, { abortEarly: false })
      .then(() => {
        console.log("Form submitted with data:", formData);
        setFormData({
          email: "",
          password: "",
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
      <input
        className={css.inputForm}
        type="email"
        name="email"
        placeholder="Username or Email"
        value={formData.email}
        onChange={handleInputChange}
        onBlur={() => handleBlur("email")}
      />
      {errors.email && <div className={css.errorText}>{errors.email}</div>}

      <div className={css.passwordInputContainer}>
        <input
          className={`${css.inputForm} ${css.passwordInput}`}
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          onBlur={() => handleBlur("password")}
        />

        <div className={css.eyeIcon} onClick={handleTogglePassword}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      </div>
      {errors.password && (
        <div className={css.errorText}>{errors.password}</div>
      )}

      <div>
        <Link to="/recovery">
          <p className={css.textForgot}>Forgot password?</p>
        </Link>
      </div>
      <Button label="Sign In" type="submit" />
    </form>
  );
};

export default LoginForm;
