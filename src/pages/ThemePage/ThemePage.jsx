import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useCustomContext } from "../../services/Context/Context";

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
      {/* <NavLink to={"/main/setting"}>
        <button type="button">BACK</button>
      </NavLink> */}
      <h2>Theme</h2>
      <ul>
        <li>
          <button type="button" onClick={handleThemeLight}>
            Light
          </button>
          {theme === "light" ? <span>+</span> : ""}
        </li>

        <li>
          <button type="button" onClick={handleThemeDark}>
            Dark
          </button>
          {theme === "dark" ? <span>+</span> : ""}
        </li>
      </ul>
    </div>
  );
};

export default ThemePage;
