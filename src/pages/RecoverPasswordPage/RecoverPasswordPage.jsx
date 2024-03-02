import { NavLink } from "react-router-dom";
import { Modal } from "../../components/Modal/Modal";
import { useState } from "react";

// import css from "./RecoverPasswordPage.module.css";

const RecoverPasswordPage = () => {
  const [isModal, setIsModal] = useState(false);

  const handleToggleModal = () => {
    setIsModal((prev) => !prev);
  };

  return (
    <div>
      <form>
        <input type="text" name="codeField" placeholder="Code Field" />
        <input type="text" name="passwordField" placeholder="Password Field" />

        <button type="button">Confirm</button>
      </form>
      <button type="button" onClick={handleToggleModal}>
        Send a Code Again
      </button>
      <ul>
        <li>
          <NavLink to="/main/authorization">
            <button type="button">Cancel</button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/main/authorization">
            <button type="button">OK</button>
          </NavLink>
        </li>
      </ul>
      {isModal && (
        <Modal handleToggleModal={handleToggleModal} feedback={true}>
          <p>Send a new password to email</p>
          <button type="button" onClick={handleToggleModal}>
            ok
          </button>
        </Modal>
      )}
    </div>
  );
};

export default RecoverPasswordPage;
