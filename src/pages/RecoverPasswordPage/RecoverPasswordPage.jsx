import css from "./RecoverPasswordPage.module.css";
import {
  NavLink,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { Modal } from "../../components/Modal/Modal";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import back from "../../assets/images/back.jpg";
import Button from "../../components/Button";
import { MessagePostOnModeration } from "../../components/MessagePostOnModeration/MessagePostOnModeration";
import { ToastError } from "../../services/ToastError/ToastError";
import { ToastContainer } from "react-toastify";
import { postResetPassword } from "../../services/https/https";

const RecoverPasswordPage = () => {
  const [searchParams] = useSearchParams();
  const { token } = useParams();

  const navigate = useNavigate();
  const [postSuccessfullyAdded, setPostSuccessfullyAdded] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [validForm, setValidForm] = useState(false);

  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({
    token: token,
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    setEmail(searchParams.get("email"));
    setFormData({
      ...formData,
      email: email,
    });
  }, [email, formData, searchParams]);

  useEffect(() => {
    if (
      formData?.confirmPassword?.length > 0 ||
      formData?.password?.length > 0
    ) {
      if (formData?.password === formData?.confirmPassword) {
        setValidForm(true);
      } else {
        setValidForm(false);
      }
    }
  }, [formData?.confirmPassword, formData?.password]);

  const handleTogglePassword = (el) => {
    if (el === "confirmPassword") {
      setShowConfirmPassword(!showConfirmPassword);
      return;
    }
    if (el === "password") {
      setShowNewPassword(!showNewPassword);
      return;
    }
  };

  const handleToggleModal = () => {
    setIsModal((prev) => !prev);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Form submitted with data:", formData);
      const data = await postResetPassword(
        // email,
        // token,
        // formData.password,
        // formData.confirmPassword,
        formData
      );
      setPostSuccessfullyAdded(true);

      setTimeout(() => {
        navigate("/main/authorization");
      }, 3000);
    } catch (error) {
      console.log(error.message);
      ToastError(error.message);
    }
  };

  return (
    <div>
      <ToastContainer />
      {!postSuccessfullyAdded && (
        <>
          <GoBackButton
            imgSrc={back}
            imgAlt="Go back"
            imgWidth="50px"
            imgHeight="50px"
            title="Password recovery"
            to="/recovery"
          />

          <form className={css.formContainer} onSubmit={handleSubmit}>
            <div className={css.inputContainer}>
              <input
                className={`${css.inputForm} ${
                  formData?.password?.length > 0 ? css.active : ""
                }
              secondary_text_style`}
                type={showNewPassword ? "text" : "password"}
                name="password"
                placeholder="New password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <div
                className={css.eyeIcon}
                onClick={() => handleTogglePassword("password")}
              >
                {" "}
                {!showNewPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            <div className={css.inputContainer}>
              <input
                className={`${css.inputForm} ${
                  formData?.confirmPassword?.length > 0 ? css.active : ""
                }
              secondary_text_style`}
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              <div
                className={css.eyeIcon}
                onClick={() => handleTogglePassword("confirmPassword")}
              >
                {" "}
                {!showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            <div className={css.btn_container}>
              <Button
                label="Confirm"
                type="submit"
                disabled={validForm ? false : true}
              />
            </div>
          </form>
        </>
      )}
      {postSuccessfullyAdded && (
        <MessagePostOnModeration>
          The new password has been saved.
        </MessagePostOnModeration>
      )}     
    </div>
  );
};

export default RecoverPasswordPage;
