import css from "./LanguagePage.module.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Icon_Check } from "../../assets/icons/setting_check.svg";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import { useCustomContext } from "../../services/Context/Context";

const LanguagePage = () => {
  const { theme, setTheme } = useCustomContext();
  return (
    <div>
      <div className={css.top_container}>
        <GoBackButton
          to="/setting"
          imgWidth="50px"
          imgHeight="50px"
          imgAlt="Go back"
          title="Language"
        />
      </div>

      <ul>
        <li className={`${css.item} ${theme === "dark" ? css.iconDark : ""}`}>
          <p className={css.language}>EN</p>
          <p className={`${css.title} dark:text-white`}>English</p>

          <div className={css.check}>
            <Icon_Check />
          </div>
        </li>
        <li className={`${css.item} ${theme === "dark" ? css.iconDark : ""}`}>
          <p className={css.language}>UA</p>
          <p className={`${css.title} dark:text-white`}>Ukrainian</p>
          <div className={css.check}>
            <Icon_Check />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LanguagePage;
