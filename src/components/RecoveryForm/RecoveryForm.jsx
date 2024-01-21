import React, { useState } from "react";
import Button from "../Button";
import css from "./RecoveryForm.module.css";
import * as yup from "yup";
import email from "../../assets/images/email.jpg";
import back from "../../assets/images/back.jpg";
import GoBackButton from "../GoBackButton/GoBackButton";

const schema = yup.object().shape({
  email: yup
    .string()
    .matches(/^[^\s]*$/)
    .matches(/^[^а-яА-ЯіІїЇєЄ]*$/)
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    .required(),
});

const RecoveryForm = () => {
  const [dynamicMargin] = useState(50);
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
        setFormData({
          email: "",
        });
      })
      .catch((errors) => {
        console.error("Form validation errors:", errors);
      });
  };

  return (
    <div className={css.formContainer}>
      <GoBackButton
        to="/main/authorization/"
        imgSrc={back}
        imgAlt="Go back"
        imgWidth="56px"
        imgHeight="56px"
        title="Password recovery"
        dynamicMargin={dynamicMargin}
      />
      <img src={email} alt="Logo" className={css.imageForm} />
      <h3 className={css.titleForm}>Update your password</h3>
      <p className={css.infoForm}>
        Enter your username or email address and select Send Email
      </p>

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
