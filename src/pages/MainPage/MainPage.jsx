import { NavLink } from "react-router-dom";
import css from "./MainPage.module.css";
import { useEffect, useState } from "react";
import { Toastify } from "../../services/Toastify/Toastify";
import { ToastError } from "../../services/ToastError/ToastError";
import { ToastContainer } from "react-toastify";

const LOKAL_KEY = "savedPost";

const data = [
  {
    id: "1",
    advertiser: "Learn Chinese",
    banner: "BANNER-1",
  },
  {
    id: "2",
    advertiser: "Graphic design",
    banner: "BANNER-2",
  },
  {
    id: "3",
    advertiser: "Englishdom",
    banner: "BANNER-3",
  },
  {
    id: "4",
    advertiser: "Music production",
    banner: "BANNER-4",
  },
  {
    id: "5",
    advertiser: "user-5",
    banner: "BANNER-5",
  },
];

const MainPage = () => {
  const [posts, setPost] = useState(() => {
    return JSON.parse(localStorage.getItem(LOKAL_KEY)) ?? "";
  });

  //  useEffect(() => {
  //   const data =  http://
  //   }, [])

  useEffect(() => {
    localStorage.setItem(LOKAL_KEY, JSON.stringify(posts));
  }, [posts]);

  const handleSavePost = (savedId) => {
    const savedPost = data.filter(({ id }) => id === savedId);
    if (posts) {
      const savedValid = posts.find((post) => post.id === savedId);
      if (savedValid) {
        ToastError("This post has already been saved");
        return;
      }
      Toastify("Post successfully saved");
    }

    setPost((prev) => [...prev, ...savedPost]);
  };

  useEffect(() => {
    localStorage.removeItem("pathname");
  }, []);

  const handleSetting = () => {
    localStorage.setItem("pathname", "/main");
  };

  return (
    <div>
      <ToastContainer />
      <NavLink to="setting" onClick={handleSetting}>
        <button type="button">Setting</button>
      </NavLink>

      {data.map(({ banner, advertiser, id }) => (
        <div key={banner} className={css.item}>
          <div className={css.post_header}>
            <NavLink to={`${id}`} className={css.link}>
              <img src="" alt="" className={css.img} />
              <div className={css.description}>
                {banner}
                <h3>{advertiser}</h3>
                <p className={css.post_description}>
                  Geringe finanzielle Bildung hält dich davon ab, den richtigen
                  Plan für deine Finanzen zu...
                </p>
              </div>
            </NavLink>

            <button
              type="button"
              onClick={() => handleSavePost(id)}
              className={css.save_btn}
            >
              SAVE
            </button>
          </div>

          <div>
            <div className={css.post_footer}>
              <p>{advertiser}</p>
              <NavLink to={`/${id}`}>Show all courses</NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainPage;
