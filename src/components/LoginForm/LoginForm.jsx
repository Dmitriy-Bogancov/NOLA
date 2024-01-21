import React, { useState } from "react";
import Button from "../Button";
import css from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import * as yup from "yup";

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
    <div className={css.formContainer} onSubmit={handleSubmit}>
      <input
        className={css.inputForm}
        type="email"
        name="email"
        placeholder="Username or Email"
        value={formData.email}
        onChange={handleInputChange}
      />

      <input
        className={css.inputForm}
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
      />

      <div>
        <Link to="/recovery">
          <p className={css.textForgot}>Forgot password?</p>
        </Link>
      </div>
      <Button label="Sing In" type="submit" />
    </div>
  );
};

export default LoginForm;
