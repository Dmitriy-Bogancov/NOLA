/* eslint-disable no-unused-vars */
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import css from "./Layout.module.css";
import { useAuth } from "../../services/hooks/useAuth";
import { useState } from "react";
import RegistrationCheckPage from "../../pages/RegistrationCheckPage/RegistrationCheckPage";

const Layout = () => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const [addPost, setAddPost] = useState(false);
  const [registrationCheck, setRegistrationCheck] = useState(false);

  const handleAddPost = (e) => {
    if (token) {
      setAddPost((prev) => !prev);
      navigate("/main/addPost");
    } else if (!token) {
      setRegistrationCheck((prev) => !prev);
    }
  };

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
              <button type="button" onClick={handleAddPost}>
                ➕
              </button>
              {addPost && <NavLink to="addPost"></NavLink>}
              {registrationCheck && (
                <RegistrationCheckPage
                  setRegistrationCheck={setRegistrationCheck}
                />
              )}
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
