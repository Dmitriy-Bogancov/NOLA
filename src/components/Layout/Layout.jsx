import { NavLink, Outlet } from "react-router-dom";

import css from "./Layout.module.css";

const Layout = () => {
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
              <NavLink to="searchPage">⚪</NavLink>
            </li>
            <li className={css.item}>
              <NavLink>➕</NavLink>
            </li>
            <li className={css.item}>
              <NavLink to="/savedPosts">🤍</NavLink>
            </li>
            <li className={css.item}>
              <NavLink to="authorization">👩</NavLink>
            </li>

            {/* <li>
          <NavLink to="/entrance">entrance</NavLink>
       </li> */}
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Layout;
