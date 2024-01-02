import { NavLink } from "react-router-dom";
import css from "./EntrancePage.module.css";
const EntrancePage = () => {
  return (
    <div>
      <h1>EntrancePage</h1>
      <NavLink to="/authorization">
        <button type="button">Advertiser</button>
      </NavLink>

      <NavLink to="/welcome">
        <button type="button">Finder</button>
      </NavLink>
    </div>
  );
};

export default EntrancePage;
