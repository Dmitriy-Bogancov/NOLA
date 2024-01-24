import { NavLink } from "react-router-dom";

export const Setting = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="language">Language</NavLink>
        </li>

        <li>
          <NavLink to="theme">Theme</NavLink>
        </li>
      </ul>
    </div>
  );
};
