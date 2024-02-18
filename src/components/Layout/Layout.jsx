import { NavLink, Outlet } from "react-router-dom";

import css from "./Layout.module.css";
import { useCustomContext } from "../../services/Context/Context";

const Layout = () => {
  const { token, setToken } = useCustomContext();

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
              {!token ? (
                <NavLink to="registrationCheck">➕</NavLink>
              ) : (
                <NavLink to="addPost">➕</NavLink>
              )}
            </li>
            <li className={css.item}>
              <NavLink to="savedPosts">🤍</NavLink>
            </li>
            <li className={css.item}>
              {
                //   account ? (
                //   <NavLink to="accountAdverticer">👩</NavLink>
                // ) :
                token ? (
                  <NavLink to="accountAdverticer">👩</NavLink>
                ) : (
                  <NavLink to="authorization">👩</NavLink>
                )
              }
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Layout;
