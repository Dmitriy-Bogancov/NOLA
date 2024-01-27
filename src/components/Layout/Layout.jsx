import { NavLink, Outlet } from "react-router-dom";

import css from "./Layout.module.css";
import { useState } from "react";
import { useCustomContext } from "../../services/Context/Context";

const Layout = () => {
  const { auth, setAuth } = useCustomContext([]);
  const [account, setAccount] = useState(false);

  //  useEffect(() => {
  //       http://
  //   }, [])

  return (
    <div className={css.container}>
      <main className={css.main}>
        <Outlet />
      </main>
      <footer className={css.footer}>
        <nav>
          <ul className={css.list}>
            <li className={css.item}>
              <NavLink to="">🏡</NavLink>
            </li>
            <li className={css.item}>
              <NavLink to="search">⚪</NavLink>
            </li>
            <li className={css.item}>
              {!auth ? (
                <NavLink to="registrationCheck">➕</NavLink>
              ) : (
                <NavLink to="addPost">➕</NavLink>
              )}
            </li>
            <li className={css.item}>
              <NavLink to="savedPosts">🤍</NavLink>
            </li>
            <li className={css.item}>
              {account ? (
                <NavLink to="accountAdverticer">👩</NavLink>
              ) : auth ? (
                <NavLink to="accountAdverticer/adverticerEdit">👩</NavLink>
              ) : (
                <NavLink to="authorization">👩</NavLink>
              )}
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Layout;
