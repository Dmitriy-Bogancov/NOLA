/* eslint-disable no-unused-vars */
import { NavLink, Outlet } from "react-router-dom";
import css from "./Layout.module.css";
import { useAuth } from "../../services/hooks/useAuth";

const Layout = () => {
  const { token } = useAuth();
  const drafts = JSON.parse(localStorage.getItem("backend"));

  return (
    <div>
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
                <NavLink to="registrationCheck"> ➕</NavLink>  
              ) : drafts ? (
                <NavLink to="/main/drafts"> ➕</NavLink>
              ) : (
                <NavLink to="addPost"> ➕</NavLink>
              )}

              {/* {drafts ? (
                <NavLink to="/main/drafts"> ➕</NavLink>
              ) : token ? (
                <NavLink to="addPost"> ➕</NavLink>
              ) : (
                <NavLink to="registrationCheck"> ➕</NavLink>
              )} */}
            </li>

            <li className={css.item}>
              <NavLink to="savedPosts">🤍</NavLink>
            </li>
            <li className={css.item}>
              <NavLink to="authorization">👩</NavLink>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Layout;
