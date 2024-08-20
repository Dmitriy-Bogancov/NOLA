import css from "../../components/ChangeSettingAccount/ChangeSettingAccount.module.css";
import sendEmail from "../../assets/images/sendEmail.png";
import * as yup from "yup";

import { useEffect, useState } from "react";
import { useCustomContext } from "../../services/Context/Context";
import Button from "../../components/Button";
import { Modal } from "../../components/Modal/Modal";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import { useNavigate } from "react-router-dom";
import { MessagePostOnModeration } from "../../components/MessagePostOnModeration/MessagePostOnModeration";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@(gmail\.com|ukr\.net|meta\.ua)$/,
      "Please enter valid characters"
    )

    .matches(/^[^\s]*$/, "Please enter valid characters")
    .matches(/^[^а-яА-ЯіІїЇєЄ]*$/, "Please enter valid characters")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i,
      "Please enter valid characters"
    ),

  newEmail: yup
    .string()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@(gmail\.com|ukr\.net|meta\.ua)$/,
      "Please enter valid characters"
    )
    .matches(/^[^\s]*$/, "Please enter valid characters")
    .matches(/^[^а-яА-ЯіІїЇєЄ]*$/, "Please enter valid characters")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i,
      "Mail is not registered in the system. Please try again."
    ),
});

export const ChangeEmailPage = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useCustomContext();
  const [isModal, setIsModal] = useState(false);
  const [messageChangePassword, setMessageChangePassword] = useState(false);
  const [validForm, setValidForm] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    newEmail: "",
  });

  const [errors, setErrors] = useState({});

  // useEffect(() => { }, [errors]);

  useEffect(() => {
    console.log(errors?.email?.length, errors?.newEmail?.length);

    if (errors?.email?.length === 0 && errors?.newEmail?.length === 0) {
      setValidForm(true);
      return;
    } else {
      setValidForm(false);
    }
  }, [errors?.newEmail?.length, errors?.email?.length]);

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

  const handleToggleModal = () => {
    setIsModal((prev) => !prev);
  };

  const confirmMessage = () => {
    handleToggleModal();

    setMessageChangePassword(true);

    setTimeout(() => {
      navigate("/setting");
    }, 3000);
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

  const handleBack = () => {
    navigate(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    schema
      .validate(formData, { abortEarly: false })
      .then(async () => {
        try {
          console.log("Form submitted with data:", formData);

          setIsModal(true);
        } catch (error) {
          console.log(error);
        }
        setFormData({
          email: "",
          newEmail: "",
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

  return (
    <>
      {!messageChangePassword && (
        <>
          <GoBackButton
            imgAlt="Go back"
            imgWidth="50px"
            imgHeight="50px"
            title="Changing email"
            onClick={handleBack}
          />

          <img
            src={sendEmail}
            alt="sendEmail"
            className={css.img}
            style={{ transform: "translate(20px, 0px)", marginBottom: "32px" }}
          />

          <div className={css.change_info_container}>
            <h2 className={css.change_title}>Change your email</h2>
            <p className={`${css.change_info} dark:text-white`}>
              The request to confirm the change of email <br />
              will be sent to your primary email address
            </p>
          </div>
          <form onSubmit={handleSubmit} className={css.formContainer}>
            <div className={css.inputContainer}>
              <div>
                <div className={css.fieldContainer}>
                  <input
                    type="text"
                    name="email"
                    placeholder="Current email address"
                    value={formData.email}
                    onBlur={() => handleBlur("email")}
                    onChange={handleInputChange}
                    style={{
                      borderColor: getBorderColor("email"),
                      color: getBorderColor("email"),
                    }}
                    className={`${css.inputForm}  ${
                      errors?.email?.length === 0 ? css.active : ""
                    }   ${errors?.email?.length > 0 ? css.errorPlaceholder : ""}
                                 dark:bg-black dark:border-white dark:text-white
                      `}
                  />
                </div>
                {errors.email && (
                  <div className={css.errorText}>{errors.email}</div>
                )}
              </div>

              <div>
                <div className={css.fieldContainer}>
                  <input
                    type="text"
                    name="newEmail"
                    placeholder="New email address"
                    value={formData.newEmail}
                    onBlur={() => handleBlur("newEmail")}
                    style={{
                      borderColor: getBorderColor("newEmail"),
                      color: getBorderColor("newEmail"),
                    }}
                    onChange={handleInputChange}
                    className={`${css.inputForm}    ${
                      errors?.newEmail?.length === 0 ? css.active : ""
                    }            ${
                      errors?.newEmail?.length > 0 ? css.errorPlaceholder : ""
                    }
                                 dark:bg-black dark:border-white dark:text-white
                      `}
                  />
                </div>
                {errors.newEmail && (
                  <div className={css.errorText}>{errors.newEmail}</div>
                )}
              </div>
            </div>
            <div className={css.btn_container}>
              <Button
                label="Send a request"
                disabled={
                  (formData?.email?.includes("gmail.com") ||
                    formData?.email?.includes("ukr.net") ||
                    formData?.email?.includes("meta.ua")) &&
                  (formData?.newEmail?.includes("gmail.com") ||
                    formData?.newEmail?.includes("ukr.net") ||
                    formData?.newEmail?.includes("meta.ua"))
                    ? false
                    : true
                }
                />
            </div>
          </form>
        </>
      )}

      {isModal && (
        <Modal
          cancel={handleToggleModal}
          handleToggleModal={handleToggleModal}
          title="Warning!"
          description="For account security purpose, once the email address has been changed, transactions will be disabled for 24 hours."
          info="Please note that once changes have been made, the email address cannot be changed or deleted for the next seven days."
          confirm={confirmMessage}
        />
      )}

      {messageChangePassword && (
        <MessagePostOnModeration>
          The request has been sent to your primary email
        </MessagePostOnModeration>
      )}
    </>
  );
};

export default ChangeEmailPage;
