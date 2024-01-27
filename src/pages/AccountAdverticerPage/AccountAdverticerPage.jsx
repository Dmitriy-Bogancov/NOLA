import { NavLink } from "react-router-dom";
import Button from "../../components/Button";

// import css from "./AccountAdverticerPage.module.css";

const AccountAdverticerPage = () => {
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

      <Button label="Save" type="submit" />
      <NavLink to="/accountAdverticer">
        <button type="button">Edit</button>
      </NavLink>
      <NavLink to="/welcome">Enter data later</NavLink>
    </div>
  );
};

export default AccountAdverticerPage;
