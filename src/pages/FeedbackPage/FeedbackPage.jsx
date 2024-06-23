import GoBackButton from "../../components/GoBackButton/GoBackButton";
import css from "./FeedbackPage.module.css";
import { ReactComponent as Icon_Telegram } from "../../assets/icons/feedback_telegram.svg";
import { ReactComponent as Icon_Instagram } from "../../assets/icons/feedback_instagram.svg";
import { ReactComponent as Icon_Facebook } from "../../assets/icons/feedback_facebook.svg";
import { ReactComponent as Icon_WhatsApp } from "../../assets/icons/feedback_whatsApp.svg";

const FeedbackPage = () => {
  return (
    <>
      <div className={css.top_container}>
        <GoBackButton
          to="/setting"
          imgWidth="50px"
          imgHeight="50px"
          imgAlt="Go back"
          title="Feedback"
        />
      </div>
      <h2 className={css.title}>Contact with us:</h2>
      <ul>
        <li className={`${css.item}  dark:border-white`}>
          <Icon_Telegram />
          <a href="#" className={`${css.descr}  dark:text-white`}>Send a message with Telegram</a>
        </li>
        <li className={`${css.item}  dark:border-white`}>
          <Icon_Instagram />
          <a href="#" className={`${css.descr}  dark:text-white`}>Open our Instagram</a>
        </li>
        <li className={`${css.item}  dark:border-white`}>
          <Icon_Facebook />
          <a href="#" className={`${css.descr}  dark:text-white`}>We are on Facebook</a>

        </li>
        <li className={`${css.item}  dark:border-white`}>
          <Icon_WhatsApp />
          <a href="#" className={`${css.descr}  dark:text-white`}>Send a message on WhatsApp</a>
         </li>
      </ul>
    </>
  );
};

export default FeedbackPage;
