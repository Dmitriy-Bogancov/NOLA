import { NavLink, Outlet } from "react-router-dom";

import css from "./Layout.module.css";
import { useState } from "react";

const Layout = () => {
  const [auth, setAuth] = useState(false)

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
              <NavLink to ="registrationCheck">➕</NavLink>
            </li>
            <li className={css.item}>
              <NavLink to="savedPosts">🤍</NavLink>
            </li>
            <li className={css.item}>
              {
              auth ? <NavLink to="authorization">👩</NavLink> : <NavLink to="accountAdverticer">👩</NavLink>
              }
              
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Layout;
