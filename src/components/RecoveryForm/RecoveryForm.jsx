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
    .matches(/^[^\s]*$/, "Please enter valid characters")
    .matches(/^[^а-яА-ЯіІїЇєЄ]*$/, "Please enter valid characters")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address")
    .required("Email is required"),
});

const RecoveryForm = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

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
      .catch((validationErrors) => {
        const newErrors = {};
        validationErrors.inner.forEach((error) => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      });
  };

  const handleBlur = async (field) => {
    try {
      await schema.validateAt(field, formData);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: "",
      }));
    } catch (validationError) {
      if (!validationError.message) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [field]: "Invalid value",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [field]: validationError.message,
        }));
      }
    }
  };

  const getBorderColor = (field) => {
    return errors[field] ? "#ff0000" : "#9e9e9e";
  };

  return (
    <div className={css.formContainer}>
      <GoBackButton
        to="/main/authorization/"
        imgSrc={back}
        imgAlt="Go back"
        imgWidth="50px"
        imgHeight="50px"
        title="Password recovery"
      />
      <img src={email} alt="Logo" className={css.imageForm} />
      <h3 className={css.titleForm}>Update your password</h3>
      <p className={css.infoForm}>
        Enter your username or email address and select Send Email
      </p>

      <form onSubmit={handleSubmit}>
        <div className={css.inputContainer}>
          {errors.email && <div className={css.errorText}>{errors.email}</div>}
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
        <Button label="Send email" type="submit" />
      </form>
    </div>
  );
};

export default RecoveryForm;
