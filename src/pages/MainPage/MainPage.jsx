import { NavLink } from "react-router-dom";
import css from "./MainPage.module.css";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

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

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className={css.swiper_container}
      >
        {[...Array(6)].map((slide, idx) => (
          <SwiperSlide
            key={idx}
            style={{
              width: "80%",
            }}
            className={css.swiper_slide}
          >
            <img src={slide} alt="" className={css.img} />
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <div
            className="swiper-button-prev slider-arrow"
            style={{ color: "transparent" }}
          ></div>
          <div
            className="swiper-button-next slider-arrow"
            style={{ color: "transparent" }}
          ></div>

          <div
            className="swiper-pagination"
            style={{
              position: "relative",
              bottom: "2px",
            }}
          ></div>
        </div>
      </Swiper>

      {data.map(({ banner, advertiser, id }) => (
        <div key={banner} className={css.item}>
          <NavLink to={`/${id}`}>{`Advertiser Header ${advertiser}`}</NavLink>
          <NavLink to={`${id}`} className={css.link}>
            {banner}
          </NavLink>

          <a href="/" className={css.link}>
            Link
          </a>

          <button type="button">Learn more</button>
          <button type="button" onClick={() => handleSavePost(id)}>
            SAVE
          </button>
        </div>
      ))}
    </div>
  );
};

export default MainPage;
