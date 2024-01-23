import React, { useState } from "react";
import Button from "../Button";
import css from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";

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
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
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
      })
      .catch((errors) => {
        console.error("Form validation errors:", errors);
      });
  };

  return (
    <div onSubmit={handleSubmit}>
      <input
        className={css.inputForm}
        type="email"
        name="email"
        placeholder="Username or Email"
        value={formData.email}
        onChange={handleInputChange}
      />

      <div className={css.passwordInputContainer}>
        <input
          className={`${css.inputForm} ${css.passwordInput}`}
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <div className={css.eyeIcon} onClick={handleTogglePassword}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      </div>

      <div>
        <Link to="/recovery">
          <p className={css.textForgot}>Forgot password?</p>
        </Link>
      </div>
      <Button label="Sign In" type="submit" />
    </div>
  );
};

export default LoginForm;
