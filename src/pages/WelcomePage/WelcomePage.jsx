import { NavLink } from "react-router-dom";

import css from "./WelcomePage.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

import learn from "../../assets/images/learn.png";
import create from "../../assets/images/create.png";
import searching from "../../assets/images/searching.png";

const WelcomePage = () => {
  return (
    <div className={css.welcome_container}>
      <div className={css.welcome_main}>
        <h1 className={css.title}>Welcome to NOLA!</h1>

        <p className={css.description}>
          "No One Likes Advertisement" <br /> But we do!
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
            <img src={learn} alt="learnsearching" className={css.img} />
            <div className={css.specification}>
              <h3 className={css.swiper_title}>Diverse e-catalog</h3>
              <p className={`${css.swiper_description} dark:text-white`}>
                Events, webinars, courses, publicity – all at once in one place
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className={css.swiper_slide}>
            <img
              src={searching}
              alt="searchingAdvertising"
              className={css.img}
            />
            <div className={css.specification}>
              <h3 className={css.swiper_title}>Quick advert search</h3>
              <p className={`${css.swiper_description} dark:text-white`}>
                Easy-to-use subject categories and meta tags
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className={css.swiper_slide}>
            <img src={create} alt="createAdvertising" className={css.img} />
            <div className={css.specification}>
              <h3 className={css.swiper_title}>Simple post publication</h3>
              <p className={`${css.swiper_description} dark:text-white`}>
                Quick and free organic advertisement placement
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <NavLink to="/main" className={css.welcome_footer}>
        <button type="button" className={css.btn}>
          Continue
        </button>
      </NavLink>
    </div>
  );
};

export default WelcomePage;
