import { useEffect } from "react";
import { NavLink } from "react-router-dom"

export const Setting = () => {
    useEffect(() => {
    localStorage.removeItem("pathname");
  }, []);

  const handleSetting = () => {
    localStorage.setItem("pathname", "/main/settingAdverticer");
  };
    return (
    <div>

        <h2>Setting</h2>
        <ul>
          <li>
            <NavLink to="/main/setting/language">Language</NavLink>
          </li>

          <li>
            <NavLink to="/main/setting/theme" onClick={handleSetting}>Theme</NavLink>
          </li>
          <li>
            <NavLink to="/main/setting/aboutService">About service</NavLink>
          </li>
        </ul>
     </div>

    )
}