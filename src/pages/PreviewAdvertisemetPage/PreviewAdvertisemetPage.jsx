import GoBackButton from "../../components/GoBackButton/GoBackButton";
import back from "../../assets/images/back.jpg";
import { useState } from "react";
import { HandleFormConfig } from "../../components/HandleFormConfig/HandleFormConfig";

const PreviewAdvertisemetPage = () => {
  const [formConfig, setFormConfig] = useState(false);

  const handleConfirmClick = () => {
    setFormConfig(true);
  };

  return (
    <div>
      {formConfig && (
        <HandleFormConfig
          message={"Sucsessfull add a new advertisement"}
          navigatePage={"/main/accountAdverticer"}
        />
      )}
      PreviewAdvertisemetPage
      <GoBackButton to="/main/addPost" imgSrc={back} imgAlt="Go back" />
      <button type="button" onClick={handleConfirmClick}>
        Confirm
      </button>
    </div>
  );
};

export default PreviewAdvertisemetPage;
