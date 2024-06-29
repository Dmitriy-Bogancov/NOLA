/* eslint-disable no-unused-vars */
import { NavLink, Outlet } from "react-router-dom";
import css from "./Layout.module.css";
import { useAuth } from "../../services/hooks/useAuth";
import { ReactComponent as Icon_Home } from "../../assets/icons/home.svg";
import { ReactComponent as Icon_Searching } from "../../assets/icons/searching.svg";
import { ReactComponent as Icon_Add } from "../../assets/icons/add_footer.svg";
import { ReactComponent as Icon_Save } from "../../assets/icons/save_footer.svg";
import { ReactComponent as Icon_Account } from "../../assets/icons/account_footer.svg";

const Layout = () => {
  const { token } = useAuth();
  const drafts = JSON.parse(localStorage.getItem("backend"));

  return (
    <div>
      <main className={css.main}>
        <Outlet />
      </main>
      <footer className={css.footer}>
        <nav className={css.nav}>
          <ul className={css.list}>
            <li className={css.item}>
              <NavLink to="">
                <div className={css.icon}>
                  <Icon_Home />
                </div>
              </NavLink>
            </li>
            <li className={css.item}>
              <NavLink to="search">
                <div className={css.icon}>
                  <Icon_Searching />
                </div>
              </NavLink>
            </li>
            <li className={css.item}>
              {!token ? (
                <NavLink to="registrationCheck">
                  <div>
                    <Icon_Add />
                  </div>
                </NavLink>
              ) : drafts ? (
                <NavLink to="/main/drafts">
                  <div>
                    <Icon_Add />
                  </div>
                </NavLink>
              ) : (
                <NavLink to="addPost">
                  <div>
                    <Icon_Add />
                  </div>
                </NavLink>
              )}
            </li>

            <li className={css.item}>
              <NavLink to="savedPosts">
                <div className={css.icon}>
                  <Icon_Save />
                </div>
              </NavLink>
            </li>
            <li className={css.item}>
              <NavLink to="authorization">
                <div className={css.icon}>
                  <Icon_Account />
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Layout;
