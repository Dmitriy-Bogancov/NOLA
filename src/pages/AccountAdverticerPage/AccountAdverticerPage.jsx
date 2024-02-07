import { NavLink, Outlet, useLocation } from "react-router-dom";

import css from "./AccountAdverticerPage.module.css";
import { ScrollBar } from "../../components/ScrollBar/ScrollBar";
import { useEffect, useState } from "react";
import { getAccountApi } from "../../services/https/https";

const AccountAdverticerPage = () => {
  const location = useLocation(); 
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   const getData = (async () => {
  //     const data = await getAccountApi();
  //     setData(data)
  //   })();
  // }, [])

  return (
    <div className={css.accountAdverticer_container}>
      <div className={css.nav}>
        <NavLink to="setting" state={location}>
          <button type="button">Setting</button>
        </NavLink>

        <NavLink to="adverticerEdit">
          <button type="button">Edit</button>
        </NavLink>
      </div>

      {/* {data?.map(({name, textarea}) => ())} */}
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

      <ScrollBar
        labelOne="My publications"
        pathnameOne="/main/accountAdverticer"
        labelTwo="Saved"
        pathnameTwo="/main/accountAdverticer/adverticerSaved"
      />

      <Outlet />
    </div>
  );
};

export default AccountAdverticerPage;
