import { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";

const SettingPage = () => {
  const navigate = useNavigate();
  const [pathname, setPathname] = useState(() => {
    return localStorage.getItem("pathname") ?? "";
  });

  const handleSettingButton = () => {
    if (pathname === "/main") {
      navigate("/main");

      return;
    }

    navigate("/main/accountAdverticer");
  };

  return (
    <div>
      <div>
        <button type="button" onClick={handleSettingButton}>
          BACK
        </button>

        <h2>Setting</h2>
        <ul>
          <li>
            <NavLink to="/main/setting/language">Language</NavLink>
          </li>

          <li>
            <NavLink to="/main/setting/theme">Theme</NavLink>
          </li>
          <li>
            <NavLink to="/main/setting/aboutService">About service</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SettingPage;
