import { NavLink } from "react-router-dom";

import css from "./AccountAdverticerPage.module.css";
import { ScrollBar } from "../../components/ScrollBar/ScrollBar";

const AccountAdverticerPage = () => {
  // const location = useLocation();
  return (
    <div>
      <h2>AccountAdverticer</h2>
      <p>AVATAR</p>
      <ul>
        <li>
          <a href="/">LINK</a>
        </li>
        <li>
          <a href="/">LINK</a>
        </li>
        <li>
          <a href="/">LINK</a>
        </li>
      </ul>

      <p>Description</p>

      <button type="button">SAVE</button>
      <NavLink to="/accountAdverticer">
        <button type="button">Edit</button>
      </NavLink>
      <NavLink to="/welcome">Enter data later</NavLink>
    </div>
  );
};

export default AccountAdverticerPage;
