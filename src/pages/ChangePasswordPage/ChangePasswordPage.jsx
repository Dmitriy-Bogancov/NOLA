import { useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import { NavLink } from "react-router-dom";

const ChangePasswordPage = () => {
  const [isModal, setIsModal] = useState(false);

  const handleToggleModal = () => {
    setIsModal((prev) => !prev);
  };

  return (
    <div>
      ChangePasswordPage
      <button type="button" onClick={handleToggleModal}>
        Confirm
      </button>
      <NavLink to="/main/settingAdverticer">
        <button type="button">Cancel</button>{" "}
      </NavLink>
      {isModal && (
        <Modal
          handleToggleModal={handleToggleModal}
          navigatePage={"/main/settingAdverticer"}
        >
          <p>Sucsessfull change password</p>
        </Modal>
      )}
    </div>
  );
};

export default ChangePasswordPage;
