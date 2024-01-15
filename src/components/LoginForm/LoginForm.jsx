import React, { useState } from "react";
import css from "./LoginForm.module.css";
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
      })
      .catch((errors) => {
        console.error("Form validation errors:", errors);
      });
  };

  return (
    <div className={css.formContainer}>
      <form onSubmit={handleSubmit}>
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

        <button className={css.buttonForm} type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
