import { NavLink } from "react-router-dom";

const ThemePage = () => {
  return (
    <div>
      <NavLink to={"/main/setting"}>
        <button type="button">BACK</button>
      </NavLink>
      <h2>Theme</h2>
      <ul>
        <li>Light</li>
        <li>Dark</li>
      </ul>
    </div>
  );
};

export default ThemePage;
