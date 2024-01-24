import { Setting } from "../../components/Setting/Setting";
import back from "../../assets/images/back.jpg";
import GoBackButton from "../../components/GoBackButton/GoBackButton";


const SettingPage = () => {
  return (
      <div>
          <GoBackButton to="/main/accountAdverticer" imgSrc={back} imgAlt="Go back" />
      <h2>Setting</h2>

      <Setting />
    </div>
  );
};

export default SettingPage;
