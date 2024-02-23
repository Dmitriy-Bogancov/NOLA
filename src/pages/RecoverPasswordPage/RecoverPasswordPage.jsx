import { NavLink, useNavigate } from "react-router-dom";
import { Modal } from "../../components/Modal/Modal";
import { useState } from "react";

// import css from "./RecoverPasswordPage.module.css";

const RecoverPasswordPage = () => {
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);

  const handleToggleModal = () => {
    setIsModal((prev) => !prev);
    setTimeout(() => {
      navigate("/main/authorization");
    }, 1500);  
  };

  return (
    <div>
      <form>
        <input type="text" name="codeField" placeholder="Code Field" />
        <input type="text" name="passwordField" placeholder="Password Field" />

        <button type="button">Confirm</button>
      </form>
      <button type="button">Send a Code Again</button>
      <ul>
        <li>
          <NavLink to="/main/authorization">
            <button type="button">Cancel</button>
          </NavLink>
        </li>

        <li>
          {/* <NavLink to="/main/authorization"> */}
          <button type="button" onClick={handleToggleModal}>
            OK
          </button>
          {/* </NavLink> */}
        </li>
      </ul>
      {isModal && (
        <Modal handleToggleModal={handleToggleModal}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
            quidem laboriosam, iste animi deserunt ad.
          </p>
        </Modal>
      )}
    </div>
  );
};

export default RecoverPasswordPage;
