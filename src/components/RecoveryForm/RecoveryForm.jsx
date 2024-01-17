import React, { useState } from "react";
import Button from "../Button";
import css from "./RecoveryForm.module.css";
import * as yup from "yup";
import email from "../../image/email.jpg";

const schema = yup.object().shape({
  email: yup
    .string()
    .matches(/^[^\s]*$/)
    .matches(/^[^а-яА-ЯіІїЇєЄ]*$/)
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    .required(),
});

const RecoveryForm = () => {
  const [formData, setFormData] = useState({
    email: "",
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
        // Add your recovery logic here
      })
      .catch((errors) => {
        console.error("Form validation errors:", errors);
      });
  };

  return (
    <div className={css.formContainer}>
      <h3>Password recovery</h3>
      <img src={email} alt="Logo" />
      <h3>Update your password</h3>
      <p>Enter your username or email address and select Send Email</p>

      <form onSubmit={handleSubmit}>
        <input
          className={css.inputForm}
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <Button label="Send email" type="submit" />
      </form>
    </div>
  );
};

export default RecoveryForm;
