import back from "../../assets/images/back.jpg";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useCustomContext } from "../../services/Context/Context";

const SettingPage = () => {
  const location = useLocation();

  const { setting, setSetting } = useCustomContext(true);

  const handleSettingClick = () => {
    setSetting(false);
  };
  return (
    <div>
      {setting ? (
        <div>
          <GoBackButton
            to={location.pathname.split("/").slice(0, -1).join("/")}
            imgSrc={back}
            imgAlt="Go back"
          />

          <h2>Setting</h2>
          <ul>
            <li>
              <NavLink
                to="language"
                state={location}
                onClick={handleSettingClick}
              >
                Language
              </NavLink>
            </li>

            <li>
              <NavLink to="theme" onClick={handleSettingClick}>
                Theme
              </NavLink>
            </li>
          </ul>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default SettingPage;
