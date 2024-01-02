import { NavLink } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div>
      <h1>WelcomePage</h1>
      <ul>
        <li>
          <NavLink to="/main">
            <button type="button">MainPage</button>
          </NavLink>
        </li>

        <li>
          <NavLink to="/advertiser">
            <button type="button">Edit AdvertiserPage</button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default WelcomePage;
