import { NavLink, useLocation } from "react-router-dom";

import css from "./AccountAdverticerPage.module.css";

const AccountAdverticerPage = () => {
  const location = useLocation();
  return (
    <div className={css.accountAdverticer_container}>
      <div className={css.nav}>
        <NavLink to="/setting" state={location}>
          <button type="button">Setting</button>
        </NavLink>

        <NavLink to="/adverticerEdit">
          <button type="button">Edit</button>
        </NavLink>
      </div>

      <div className={css.account}>
        <svg width="72" height="72" className={css.icon}>
          <use></use>
        </svg>

        <h3>English Study</h3>

        <p className={css.description}>
          We are the newest English language school for any age. Our school
          provides both online and offline services. We are the on newest
          English language scho...
        </p>
      </div>

      {/* <NavLink to="/welcome">Enter data later</NavLink> */}
    </div>
  );
};

export default AccountAdverticerPage;
