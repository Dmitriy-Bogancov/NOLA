import React, { useState } from "react";
import css from "./RegistrationForm.module.css";
import Button from "../Button";

import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .matches(/^[^\s]*$/)
    .matches(/^[^а-яА-ЯіІїЇєЄ]*$/)
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    .required(),
  password: yup.string().required().min(6),
  confirmPassword: yup.string().required().min(6),
});

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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
    <div className={css.formContainer}>
      <form onSubmit={handleSubmit}>
        <input
          className={css.inputForm}
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <input
          className={css.inputForm}
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />

        <input
          className={css.inputForm}
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          required
        />
        <p className={css.textInfo}>
          *By clicking the Register button, I agree to the
          <span className={css.spanPolicy}>Privacy Policy</span> and give my
          consent to data processing
        </p>
        <Button label="Register" type="submit" />
      </form>
    </div>
  );
};

export default RegistrationForm;
