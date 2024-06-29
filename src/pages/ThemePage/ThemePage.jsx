import css from "./ThemePage.module.css";
import { useCustomContext } from "../../services/Context/Context";

import { ReactComponent as Icon_Light } from "../../assets/icons/sun_light.svg";
import { ReactComponent as Icon_Dark } from "../../assets/icons/moon_light.svg";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import { ReactComponent as Icon_Check } from "../../assets/icons/setting_check.svg";

const ThemePage = () => {
  const { theme, setTheme } = useCustomContext();

  const handleThemeDark = () => {
    setTheme("dark");
  };

  const handleThemeLight = () => {
    setTheme("light");
  };
  return (
    <div>
      <div className={css.top_container}>
        <GoBackButton
          to="/setting"
          imgWidth="50px"
          imgHeight="50px"
          imgAlt="Go back"
          title="Theme"
        />
      </div>

      <ul>
        <li className={`${css.item} ${theme === "dark" ? css.iconDark : ""}`}>
          <Icon_Light />
          <p
            className={`${css.title} dark:text-white`}
            onClick={handleThemeLight}
          >
            Light
          </p>
          <div className={css.check}>
            {theme === "light" ? <Icon_Check /> : ""}
          </div>
        </li>

        <li
          className={`${css.item} ${theme === "dark" ? css.iconDarkBlack : ""}`}
        >
          <Icon_Dark />
          <p
            className={`${css.title} dark:text-white`}
            onClick={handleThemeDark}
          >
            Dark
          </p>
        </li>

        <li className={css.item_check_dark}>
          <div
            className={`${css.check_dark} ${
              theme === "dark" ? css.iconDark : ""
            }`}
          >
            {theme === "dark" ? <Icon_Check /> : ""}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ThemePage;
