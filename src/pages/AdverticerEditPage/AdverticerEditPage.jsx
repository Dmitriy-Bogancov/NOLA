import css from "./AdverticerEditPage.module.css";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import back from "../../assets/images/back.jpg";

const AdverticerEditPage = () => {
  return (
    <div className={css.adverticerEdit_container}>
      <GoBackButton
        to="/main/accountAdverticer"
        imgSrc={back}
        imgAlt="Go back"
        imgWidth="50px"
        imgHeight="50px"
      />
      <h2>Account</h2>
      <svg width="72" height="72" className={css.icon}>
        <use></use>
      </svg>

      <button type="button">SAVE</button>
    </div>
  );
};

export default AdverticerEditPage;
