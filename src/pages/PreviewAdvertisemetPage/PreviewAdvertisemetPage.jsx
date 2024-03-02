import GoBackButton from "../../components/GoBackButton/GoBackButton";
import back from "../../assets/images/back.jpg";
import { useState } from "react";
import { Modal } from "../../components/Modal/Modal";

const PreviewAdvertisemetPage = () => {
  const [isModal, setIsModal] = useState(false);

  const handleToggleModal = () => {
    setIsModal((prev) => !prev);
  };

  return (
    <div>
      PreviewAdvertisemetPage
      <GoBackButton to="/main/addPost" imgSrc={back} imgAlt="Go back" />
      <button type="button" onClick={handleToggleModal}>
        Confirm
      </button>
      {isModal && (
        <Modal
          handleToggleModal={handleToggleModal}
          navigatePage={"/main/accountAdverticer"}
        >
          <p>Sucsessfull add a new advertisement</p>
        </Modal>
      )}
    </div>
  );
};

export default PreviewAdvertisemetPage;
