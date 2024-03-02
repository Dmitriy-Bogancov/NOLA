import { useState } from "react";
import SettingPage from "../SettingPage/SettingPage";
import { useNavigate } from "react-router";
import { useCustomContext } from "../../services/Context/Context";
import { Modal } from "../../components/Modal/Modal";
import { NavLink } from "react-router-dom";

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
    navigate("/main", { replace: true });
  };

  return (
    <div>
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
          <p>Want to Sign Out</p>
          <button type="button" onClick={handleLogOut}>
            ok
          </button>
          <button type="button" onClick={handleToggleModal}>
            cancel
          </button>
        </Modal>
      )}
    </div>
  );
};

export default SettingAdverticerPage;
