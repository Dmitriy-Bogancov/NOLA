import { NavLink } from "react-router-dom";
import css from "./AdvertiserPage.module.css";

const AdvertiserPage = () => {
  return (
    <div>
      <h1>AdvertiserForm</h1>

      <ul>
        <li>
          <button type="button">Save</button>
        </li>
        <li>
          <NavLink to="/advertiser"><button type="button">Edit</button></NavLink>
        </li>
        <li>
          <NavLink to="/main">
            <button type="button">Adit Later</button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdvertiserPage;
