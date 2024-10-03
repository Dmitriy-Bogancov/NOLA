import css from "../../components/ChangeSettingAccount/ChangeSettingAccount.module.css";
import * as yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCustomContext } from "../../services/Context/Context";
import GoBackButton from "../../components/GoBackButton/GoBackButton";

import changePassword from "../../assets/images/changePassword.png";

import Button from "../../components/Button";
import { MessagePostOnModeration } from "../../components/MessagePostOnModeration/MessagePostOnModeration";

const schema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .matches(RegExp('[!@#$%^&*(),.?":{}|<>+=-]'), "Special symbols is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .min(8, "Confirm Password must be at least 8 characters")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const ChangePasswordPage = () => {
  const navigate = useNavigate();

  const { theme, setTheme } = useCustomContext();
  const [messageChangePassword, setMessageChangePassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [validForm, setValidForm] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  // useEffect(() => { }, [errors]);

  useEffect(() => {
    if (
      errors?.password?.length === 0 &&
      errors?.confirmPassword?.length === 0
    ) {
      setValidForm(true);
      return;
    } else {
      setValidForm(false);
    }
  }, [errors?.confirmPassword?.length, errors?.password?.length]);

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
      console.log(field);
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
      setValidForm(false);
    }
  };

  const getBorderColor = (field) => {
    return errors[field] && "#da2e2e";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    schema
      .validate(formData, { abortEarly: false })
      .then(async () => {
        try {
          console.log("Form submitted with data:", formData);
          setMessageChangePassword(true);

          setTimeout(() => {
            navigate("/setting");
          }, 3000);
        } catch (error) {
          console.log(error);
        }
        setFormData({
          password: "",
          confirmPassword: "",
        });
        setErrors({});
        setValidForm(false);
      })
      .catch((validationErrors) => {
        const newErrors = {};
        validationErrors.inner.forEach((error) => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      });
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      {!messageChangePassword && (
        <>
          <GoBackButton
            imgAlt="Go back"
            imgWidth="50px"
            imgHeight="50px"
            title="Changing password"
            onClick={handleBack}
          />

          <img src={changePassword} alt="changePassword" className={css.img} />

          <div className={css.change_info_container}>
            <h2 className={css.change_title}>Change your password</h2>
            <p className={`${css.change_info} dark:text-white`}>
              Enter your new password and click <br />
              “Confirm the change” button
            </p>
          </div>
          <form onSubmit={handleSubmit} className={css.formContainer}>
            <div className={css.inputContainer}>
              <div>
                <div className={css.fieldContainer}>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="New password"
                    value={formData.password}
                    onBlur={() => handleBlur("password")}
                    onChange={handleInputChange}
                    style={{
                      borderColor: getBorderColor("password"),
                      color: getBorderColor("password"),
                    }}
                    className={`${css.inputForm}  ${
                      errors?.password?.length === 0 ? css.active : ""
                    }  ${
                      errors?.password?.length > 0 ? css.errorPlaceholder : ""
                    }
                       dark:bg-black dark:border-white dark:text-white
                      `}
                  />
                  <div
                    className={`${css.eyeIcon} ${
                      errors?.password?.length > 1 ? css.error : ""
                    }`}
                    onClick={() => handleTogglePassword("password")}
                  >
                    {!showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
                {errors.password && (
                  <div className={css.errorText}>{errors.password}</div>
                )}
              </div>

              <div>
                <div className={css.fieldContainer}>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onBlur={() => handleBlur("confirmPassword")}
                    style={{
                      borderColor: getBorderColor("confirmPassword"),
                      color: getBorderColor("confirmPassword"),
                    }}
                    onChange={handleInputChange}
                    className={`${css.inputForm}  
                    ${errors?.confirmPassword?.length === 0 ? css.active : ""}  
                 ${
                   errors?.confirmPassword?.length > 0
                     ? css.errorPlaceholder
                     : ""
                 }
                   dark:bg-black dark:border-white dark:text-white
                 `}
                  />
                  <div
                    className={`${css.eyeIcon} ${
                      errors?.confirmPassword?.length > 1 ? css.error : ""
                    }`}
                    onClick={() => handleTogglePassword("confirmPassword")}
                  >
                    {!showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
                {errors.confirmPassword && (
                  <div className={css.errorText}>{errors.confirmPassword}</div>
                )}
              </div>
            </div>
            <div className={css.btn_container}>
              <Button
                label="Confirm the change"
                disabled={
                  formData.confirmPassword === formData.password && validForm
                    ? false
                    : true
                }
              />
            </div>
          </form>
        </>
      )}

      {messageChangePassword && (
        <MessagePostOnModeration>
          The password has been successfully changed.
        </MessagePostOnModeration>
      )}
    </div>
  );
};

export default ChangePasswordPage;
