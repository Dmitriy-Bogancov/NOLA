import { useState } from "react";
import SettingPage from "../SettingPage/SettingPage";
import { useNavigate } from "react-router";
import { useCustomContext } from "../../services/Context/Context";
import { Modal } from "../../components/Modal/Modal";
import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Toastify } from "../../services/Toastify/Toastify.js";

const SettingAdverticerPage = () => {
  const navigate = useNavigate();
  const { token, setToken } = useCustomContext();
  const [isModal, setIsModal] = useState(false);

  const handleToggleModal = () => {
    setIsModal((prev) => !prev);
  };

  const handleLogOut = () => {
    setToken("");
    sessionStorage.setItem("token", "");
    Toastify("Out success");

    setTimeout(() => {
      navigate("/main", { replace: true });
    }, 1500);
  };

  return (
    <div>
      <ToastContainer />
      <SettingPage />
      <ul>
        <li>
          <button type="button" onClick={handleToggleModal}>
            Log out
          </button>
        </li>
        <li>
          <NavLink to="changePassword">
            <button type="button">Change password</button>
          </NavLink>
        </li>
      </ul>

      {isModal && (
        <Modal handleToggleModal={handleToggleModal} feedback={true}>
          <p>Are you sure you want to Sign Out?</p>
          <button type="button" onClick={handleLogOut}>
            Yes
          </button>
          <button type="button" onClick={handleToggleModal}>
            No
          </button>
        </Modal>
      )}
    </div>
  );
};

export default SettingAdverticerPage;
