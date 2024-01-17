import { NavLink } from "react-router-dom";
import css from "./MainPage.module.css";
import { useEffect, useState } from "react";

const LOKAL_KEY = "savedPost";

const data = [
  {
    id: "1",
    advertiser: "user-1",
    banner: "BANNER-1",
  },
  {
    id: "2",
    advertiser: "user-2",
    banner: "BANNER-2",
  },
  {
    id: "3",
    advertiser: "user-3",
    banner: "BANNER-3",
  },
  {
    id: "4",
    advertiser: "user-4",
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
        return;
      }
    }

    setPost((prev) => [...prev, ...savedPost]);
  };

  return (
    <div>
      <h1>MainPage</h1>

      {data.map(({ banner, advertiser, id }) => (
        <div key={banner} className={css.item}>
          <div className={css.post_header}>
            <NavLink to={`${id}`} className={css.link}>
              <img src="" alt="" className={css.img} />
              <div className={css.description}>
                {banner}
                <h3>English for IT (B2 Level)</h3>
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

          <div >
<div className={css.post_footer}>
              <p>Englishdom</p>
              <NavLink to={`/${id}`}>{`${advertiser}`} Show all courses</NavLink>
</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainPage;
