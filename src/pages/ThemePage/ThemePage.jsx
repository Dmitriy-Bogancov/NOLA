import { useLocation } from "react-router-dom";
import back from "../../assets/images/back.jpg";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import { useCustomContext } from "../../services/Context/Context";

const ThemePage = () => {
  const location = useLocation();
  const { setSetting } = useCustomContext(null);

  const handleLanguageClick = () => {
    setSetting(true);
  };
  return (
    <div>
      <GoBackButton
        to={`${location.pathname.split("/").slice(0, -1).join("/")}`}
        imgSrc={back}
        imgAlt="Go back"
        onClick={handleLanguageClick}
      />
      <h2>Theme</h2>
      <ul>
        <li>Light</li>
        <li>Dark</li>
      </ul>
    </div>
  );
};

export default ThemePage;
