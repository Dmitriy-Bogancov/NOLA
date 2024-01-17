import { NavLink } from "react-router-dom";

import css from "./WelcomePage.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

const WelcomePage = () => {
  return (
     <div>
        <h1 className={css.title}>Welcome to NOLA!</h1>

        <p className={css.description}>
          "No One Likes Advertisement" But we do!
        </p>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className={css.swiper_slide}>
            <img
              src=""
              alt=""
              style={{ backgroundColor: "#e8e4dd" }}
              className={css.img}
            />
            <div className={css.specification}>
              <h3>Diverse e-catalog</h3>
              <p>
                Events, webinars, courses, publicity – all at once in one plac
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className={css.swiper_slide}>
            <img
              src=""
              alt=""
              style={{ backgroundColor: "#e8e4dd" }}
              className={css.img}
            />
            <div className={css.specification}>
              <h3>Quick advert search</h3>
              <p>Easy-to-use subject categories and meta tags</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className={css.swiper_slide}>
            <img
              src=""
              alt=""
              style={{ backgroundColor: "#e8e4dd" }}
              className={css.img}
            />
            <div className={css.specification}>
              <h3>Simple post publication</h3>
              <p>Organic quick and free ad placement</p>
            </div>
          </SwiperSlide>
        </Swiper>

      <NavLink to="/main">
        <button type="button" className={css.btn}>
          continue
        </button>
      </NavLink>
    </div>
  );
};

export default WelcomePage;
