import css from "./SettingPage.module.css";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import { ReactComponent as Icon_Language } from "../../assets/icons/language.svg";
import { ReactComponent as Icon_Theme } from "../../assets/icons/theme.svg";
import { ReactComponent as Icon_Question } from "../../assets/icons/question.svg";
import { ReactComponent as Icon_About } from "../../assets/icons/information.svg";
import { ReactComponent as Icon_Policy } from "../../assets/icons/policy.svg";
import { ReactComponent as Icon_Feedback } from "../../assets/icons/feedback.svg";
import { ReactComponent as Icon_Log_out } from "../../assets/icons/arrow-log-out.svg";
import { ReactComponent as Icon_Log_in } from "../../assets/icons/arrow-log-in.svg";
import { useAuth } from "../../services/hooks/useAuth";
import { useCustomContext } from "../../services/Context/Context";
import { useDispatch } from "react-redux";
// import { logoutAction } from "../../redux/auth/authSlice.js";
import { ToastError } from "../../services/ToastError/ToastError.js";
import { ToastContainer } from "react-toastify";
import { Modal } from "../../components/Modal/Modal";
import { logOutThunk } from "../../redux/auth/authThunk.js";
import { Toastify } from "../../services/Toastify/Toastify.js";

const SettingPage = () => {
  const { theme, setTheme } = useCustomContext();
  const { token } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);
  const [pathname, setPathname] = useState(() => {
    return localStorage.getItem("pathname") ?? "";
  });

  const handleToggleModal = () => {
    setIsModal((prev) => !prev);
  };

  // const handleSettingButton = () => {
  //   if (pathname === "/main") {
  //     navigate("/main");

  //     return;
  //   }

  //   navigate("/main/accountAdverticer");
  // };

  const handleLogOut = () => {
    try {
      // dispatch(logoutAction());
      dispatch(logOutThunk())
      navigate("/main");
      Toastify("Logged out successfully.");
    } catch (error) {     
      ToastError("Error! Try later");
    } finally {
      setIsModal((prev) => !prev);
    }
  };

  return (
    <div className={css.setting_container}>
      <ToastContainer />
      <div className={css.top_container}
        // onClick={handleSettingButton}
      >
        <GoBackButton
          to=""
          imgWidth="50px"
          imgHeight="50px"
          imgAlt="Go back"
          title="Setting"
        />
      </div>

      <ul className={css.list}>
        <li className={`${css.item} ${theme === "dark" ? css.iconDark : ""}`}>
          <Icon_Language />
          <NavLink
            to="/main/setting/language"
            className={`${css.title} dark:text-white`}
          >
            Language
          </NavLink>
        </li>

        <li
          className={`${css.item} ${
            theme === "dark" ? `${css.iconDarkTheme} ${css.iconDark}` : ""
          }`}
        >
          <Icon_Theme />
          <NavLink
            to="/main/setting/theme"
            className={`${css.title} dark:text-white`}
          >
            Theme
          </NavLink>
        </li>
        <li className={`${css.item} ${theme === "dark" ? css.iconDark : ""}`}>
          <Icon_Question />
          <NavLink
            to="/main/setting/questions"
            className={`${css.title} dark:text-white`}
          >
            Frequently asked questions{" "}
          </NavLink>
        </li>
        <li className={`${css.item} ${theme === "dark" ? css.iconDark : ""}`}>
          <Icon_About />
          <NavLink
            to="/main/setting/aboutService"
            className={`${css.title} dark:text-white`}
          >
            About our service
          </NavLink>
        </li>

        <li className={`${css.item} ${theme === "dark" ? css.iconDark : ""}`}>
          <Icon_Policy />
          <NavLink
            to="/main/setting/policyAndPrivecy"
            className={`${css.title} dark:text-white`}
          >
            Policy content
          </NavLink>
        </li>
        <li className={`${css.item} ${theme === "dark" ? css.iconDark : ""}`}>
          <Icon_Feedback />
          <NavLink
            to="/main/setting/feedback"
            className={`${css.title} dark:text-white`}
          >
            Feedback
          </NavLink>
        </li>
        {token ? (
          <li>
            <NavLink
              to="/main/settingAdverticer/changePassword"
              className={`${css.btn_password} dark:text-white`}
            >
              Change password
            </NavLink>

            <NavLink
              to="/main/settingAdverticer/changeEmail"
              className={`${css.btn_password} dark:text-white`}
            >
              Change email
            </NavLink>
          </li>
        ) : (
          ""
        )}
      </ul>

      {token ? (
        <>
          <div
            className={`${css.footer} ${theme === "dark" ? css.iconDark : ""}`}
          >
            <div className={css.icon}>
              <Icon_Log_out />
            </div>
            <NavLink
              className={`${css.title} dark:text-white`}
              onClick={handleToggleModal}
            >
              Log out
            </NavLink>
          </div>
        </>
      ) : (
        <div
          className={`${css.footer} ${
            theme === "dark" ? css.iconDarkSign : ""
          }`}
        >
          <div className={css.icon}>
            <Icon_Log_in />
          </div>
          <NavLink to="/main/authorization" className={css.footer_title}>
            Sign In/Register
          </NavLink>
        </div>
      )}

      {isModal && (
        <Modal
          handleToggleModal={handleToggleModal}
          confirm={handleLogOut}
          cancel={handleToggleModal}
          title="Log out"
          description="Are you sure you want to Sign Out?"
        ></Modal>
      )}
    </div>
  );
};

export default SettingPage;
